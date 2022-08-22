import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Criterescahierclausesfinancierestechniques } from 'src/app/models/criterescahierclausesfinancierestechniques';
import { Criterescahierclausesfinancierestechniquestype } from 'src/app/models/criterescahierclausesfinancierestechniquestype';
import { Intervalles } from 'src/app/models/intervalles';
import { Operateurs } from 'src/app/models/operateurs';
import { IntervallesServiceService } from 'src/app/services/intervalles/intervalles-service.service';
import { OperateursService } from 'src/app/services/operateurs/operateurs.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-intervalles-list',
  templateUrl: './intervalles-list.component.html',
  styleUrls: ['./intervalles-list.component.css']
})
export class IntervallesListComponent implements OnInit {

  title="pagination";
  page : number=1;
  count : number = 0;
  tableSize: number =10;
  tableSizes : any=['ALL',5 ,10 ,15 ,20];
  L: any = [];
  d:any[];
  operateurs:Operateurs[];
  
  criterescahierclausesfinancierestechniques:Criterescahierclausesfinancierestechniques[];
  
  displayedColumns= [  'intervallesId','intervallesInferieur','intervallesSuperieur','intervallesBareme','operateursByOperateursSuperieur','operateursByOpeOperateurs',"criterescahierclausesfinancierestechniquestype",'Operations']
  dataSource !:MatTableDataSource<any>;
  @ViewChild('paginator') paginator! :MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private intervalles:IntervallesServiceService,private operateursService:OperateursService) { }

  ngOnInit(): void {
    this.intervalles.getAllIntervalle().subscribe((response:any)=>{
     
      this.dataSource=new MatTableDataSource(response);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.matSort;
      
    });
  }

  filterData ($event:any) {
    this.dataSource.filter=$event.target.value;

  }
   // Delete 
   deletee(it:Intervalles,id:number) {
    
    swal({
      title: "Etes-vous sûr de vouloir supprimer cet enregistrement?",
     
      icon: "warning",
      buttons: ["NON","OUI"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          let i =this.L.indexOf(it)
          
          this.intervalles.deleteIntervalle(it.intervallesId).subscribe(
            
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
