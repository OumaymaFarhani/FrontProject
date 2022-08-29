import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TypeCritere } from 'src/app/models/type-critere';
import { TypecritereService } from 'src/app/services/typecritere/typecritere.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-typecritere-list',
  templateUrl: './typecritere-list.component.html',
  styleUrls: ['./typecritere-list.component.css']
})
export class TypecritereListComponent implements OnInit {

  title="pagination";
  page : number=1;
  count : number = 0;
  tableSize: number =10;
  tableSizes : any=['ALL',5 ,10 ,15 ,20];
  L: any = [];
  d:any[];
   
  displayedColumns= ['typeCritereId','typeCritereLibelle','typeCritereDescription','Operations']
  dataSource !:MatTableDataSource<any>;
  @ViewChild('paginator') paginator! :MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private typecritereService : TypecritereService) { }

  ngOnInit(): void {
    this.typecritereService.getAlltypeCritere().subscribe((response:any)=>{
     
      this.dataSource=new MatTableDataSource(response);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.matSort;
      
    });
  }

  filterData ($event:any) {
    this.dataSource.filter=$event.target.value;

  }
   // Delete 
   deletee(cc:TypeCritere,id:number) {
    
    swal({
      title: "Etes-vous sûr de vouloir supprimer cet enregistrement?",
     
      icon: "warning",
      buttons: ["NON","OUI"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          let i =this.L.indexOf(cc)
          
          this.typecritereService.deletetypeCritere(cc.typeCritereId).subscribe(
            
            ()=>{this.L.splice(i,1);
this.ngOnInit();
              });
         ;
        } 
      });
 
  } 
  

}
