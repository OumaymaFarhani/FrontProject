import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cahiercharges } from 'src/app/models/cahiercharges';
import { CategoriesProjet } from 'src/app/models/categories-projet';
import { CahierchargesService } from 'src/app/services/cahiercharges/cahiercharges.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-cahiercharges-list',
  templateUrl: './cahiercharges-list.component.html',
  styleUrls: ['./cahiercharges-list.component.css']
})
export class CahierchargesListComponent implements OnInit {
  title="pagination";
  page : number=1;
  count : number = 0;
  tableSize: number =10;
  tableSizes : any=['ALL',5 ,10 ,15 ,20];
  L: any = [];
  d:any[];
  categoriesProjet:CategoriesProjet;
  cahiercharges: Cahiercharges[];
  displayedColumns= [ 'cahierChargesId','cahierChargesLibelle','cahierChargesDescription','categoriesProjet','Operations']
  dataSource !:MatTableDataSource<any>;
  @ViewChild('paginator') paginator! :MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private cahierchargesService : CahierchargesService) { }

  ngOnInit(): void {
    this.cahierchargesService.getAllcahiercharges().subscribe((response:any)=>{
     
      this.dataSource=new MatTableDataSource(response);
      console.log(response);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.matSort;
  });}



  filterData ($event:any) {
    this.dataSource.filter=$event.target.value;

  }
   // Delete 
   deletee(ch:Cahiercharges,id:number) {
    
    swal({
      title: "Etes-vous sûr de vouloir supprimer cet enregistrement?",
     
      icon: "warning",
      buttons: ["NON","OUI"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          let i =this.L.indexOf(ch)
          
          this.cahierchargesService.deletecahiercharges(ch.cahierChargesId).subscribe(
            
            ()=>{this.L.splice(i,1);
           /*
             this.nature = this.nature.filter(n => {
          
                console.log(this.dataSource);
                return n.natureCritereId != id;

                      
 */
this.ngOnInit();
       
       
              });
         ;
          swal("Supprimée avec succes", {
            icon: "success",
          });
        } else {
          swal("Annulée!");
        }
      });
 
  } 
  



}
