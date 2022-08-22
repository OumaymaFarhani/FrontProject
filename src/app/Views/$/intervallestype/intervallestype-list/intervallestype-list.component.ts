import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Criterescahierclausesfinancierestechniquestype } from 'src/app/models/criterescahierclausesfinancierestechniquestype';
import { Intervallestype } from 'src/app/models/intervallestype';
import { Operateurs } from 'src/app/models/operateurs';
import { IntervallestypeServiceService } from 'src/app/services/intervallestype/intervallestype-service.service';
import { OperateursService } from 'src/app/services/operateurs/operateurs.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-intervallestype-list',
  templateUrl: './intervallestype-list.component.html',
  styleUrls: ['./intervallestype-list.component.css']
})
export class IntervallestypeListComponent implements OnInit {
  title="pagination";
  page : number=1;
  count : number = 0;
  tableSize: number =10;
  tableSizes : any=['ALL',5 ,10 ,15 ,20];
  L: any = [];
  d:any[];
  operateurs:Operateurs;
  
  criterescahierclausesfinancierestechniquestype:Criterescahierclausesfinancierestechniquestype[];
  
  displayedColumns= [  'intervallesId','intervallesInferieur','intervallesSuperieur','intervallesBareme','operateurstypeByOperateursSuperieur','operateurstypeByOpeOperateurs',"criterescahierclausesfinancierestechniquestype",'Operations']
  dataSource !:MatTableDataSource<any>;
  @ViewChild('paginator') paginator! :MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private intervallestype:IntervallestypeServiceService,private operateursService:OperateursService) { }

  ngOnInit(): void {
    this.intervallestype.getAllIntervalleType().subscribe((response:any)=>{
     
      this.dataSource=new MatTableDataSource(response);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.matSort;
      
    });
  }

  filterData ($event:any) {
    this.dataSource.filter=$event.target.value;

  }
   // Delete 
    
   deletee(it:Intervallestype,id:number) {
    
    swal({
      title: "Etes-vous sûr de vouloir supprimer cet enregistrement?",
     
      icon: "warning",
      buttons: ["NON","OUI"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          let i =this.L.indexOf(it)
          
          this.intervallestype.deleteIntervalleType(it.intervallesId).subscribe(
            
            ()=>{this.L.splice(i,1);
           /*
             this.nature = this.nature.filter(n => {
          
                console.log(this.dataSource);
                return n.natureCritereId != id;

                      
 */
this.ngOnInit();
       
       
              });
         ;
        /* swal("Supprimée avec succes", {
            icon: "success",
          });*/
        } 
      });
 
  } 
  
}
