import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import swal from 'sweetalert';
import { NatureCritere } from '../../../../models/nature-critere';

import { NaturecritereService } from '../../../../services/naturecritere/naturecritere.service';

@Component({
  selector: 'app-naturecritere-list',
  templateUrl: './naturecritere-list.component.html',
  styleUrls: ['./naturecritere-list.component.css']
})
export class NaturecritereListComponent implements OnInit {
  title="pagination";
  page : number=1;
  count : number = 0;
  tableSize: number =10;
  tableSizes : any=['ALL',5 ,10 ,15 ,20];
  L: any = [];
  d:any[];
  nature: NatureCritere[];
  displayedColumns= [  'natureCritereId','natureCritereLibelle','natureCritereDescription','natureCritereLibelleAr','natureCritereDescriptionAr','Operations']
  dataSource !:MatTableDataSource<any>;
  @ViewChild('paginator') paginator! :MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;


  constructor(private naturecritereservice : NaturecritereService) { }

  ngOnInit(): void {
    this.naturecritereservice.getAllNatureCritere().subscribe((response:any)=>{
     
      this.dataSource=new MatTableDataSource(response);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.matSort;
      
    });
  }


  filterData ($event:any) {
    this.dataSource.filter=$event.target.value;

  }
/* 
enteredSearchValue: string= '';

  
  delete(id:number) {
    this.naturecritereservice.deleteNatureCritere(id).subscribe((response) => {
      console.log(response);
      this.nature = this.nature.filter(n => {
        return n.natureCritereId != id;
      });
    });
  }


  

///Pagination
onTableDataChange(event :any){
  this.page=event;
  this.naturecritereservice.getAllNatureCritere();
}
onTableSizeDataChange(event :any){
  this.tableSize=event.target.value;
  this.page=1;
  this.naturecritereservice.getAllNatureCritere();
}

//Search
SearchTextChanged(){

}
*/
   // Delete 
  deletee(nn:NatureCritere,id:number) {
    
    swal({
      title: "Etes-vous sûr de vouloir supprimer cet enregistrement?",
     
      icon: "warning",
      buttons: ["NON","OUI"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          let i =this.L.indexOf(nn)
          
          this.naturecritereservice.deleteNatureCritere(nn.natureCritereId).subscribe(
            
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
  


/*
  delete(id:number) {
    this.naturecritereservice.deleteNatureCritere(id).subscribe((response) => {
      console.log(response);
      this.nature = this.nature.filter(n => {
        return n.natureCritereId != id;
      });
    });
  }
*/
}

