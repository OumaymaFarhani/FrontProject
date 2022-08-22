import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Typecahiercharges } from 'src/app/models/typecahiercharges';
import { TypecahierchargesService } from 'src/app/services/typecahiercharges/typecahiercharges.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-typecahiercharges-list',
  templateUrl: './typecahiercharges-list.component.html',
  styleUrls: ['./typecahiercharges-list.component.css']
})
export class TypecahierchargesListComponent implements OnInit {

  title="pagination";
  page : number=1;
  count : number = 0;
  tableSize: number =10;
  tableSizes : any=['ALL',5 ,10 ,15 ,20];
  L: any = [];
  d:any[];
  typecahiercharges: Typecahiercharges[];
 
  displayedColumns= [  'typeCahierChargesId','typeCahierChargesLibelle','typeCahierDesChargesDescription','ordre','typeCahierDesChargesCode','Operations']
  dataSource !:MatTableDataSource<any>;
  @ViewChild('paginator') paginator! :MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private typecahierchargeService:TypecahierchargesService) { }

  ngOnInit(): void {
    this.typecahierchargeService.getAllTypeCahierCharge().subscribe((response:any)=>{
     
      this.dataSource=new MatTableDataSource(response);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.matSort;
      
    });
  }

  filterData ($event:any) {
    this.dataSource.filter=$event.target.value;

  }
   // Delete 
   deletee(t:Typecahiercharges,id:number) {
    
    swal({
      title: "Etes-vous sûr de vouloir supprimer cet enregistrement?",
     
      icon: "warning",
      buttons: ["NON","OUI"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          let i =this.L.indexOf(t)
          
          this.typecahierchargeService.deleteTypeCahierCharge(t.typeCahierChargesId).subscribe(
            
            ()=>{this.L.splice(i,1);
           
this.ngOnInit();
       
       
              });;  } 
      });
  } 
}
