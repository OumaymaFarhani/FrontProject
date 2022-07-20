import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriesProjet } from 'src/app/models/categories-projet';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-categoriesprojet-list',
  templateUrl: './categoriesprojet-list.component.html',
  styleUrls: ['./categoriesprojet-list.component.css']
})
export class CategoriesprojetListComponent implements OnInit {
  title="pagination";
  page : number=1;
  count : number = 0;
  tableSize: number =10;
  tableSizes : any=['ALL',5 ,10 ,15 ,20];
  L: any = [];
  d:any[];
  categorie: CategoriesProjet[];
  displayedColumns= [  'categoriesProjetId','categoriesProjetLibelle','categoriesProjetDescription','Operations']
  dataSource !:MatTableDataSource<any>;
  @ViewChild('paginator') paginator! :MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private categorieProjetService : CategoriesprojetService) { }

  ngOnInit(): void {
    this.categorieProjetService.getAllCategoriesProjet().subscribe((response:any)=>{
     
      this.dataSource=new MatTableDataSource(response);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.matSort;
      
    });
  }

  filterData ($event:any) {
    this.dataSource.filter=$event.target.value;

  }
   // Delete 
   deletee(cc:CategoriesProjet,id:number) {
    
    swal({
      title: "Etes-vous sûr de vouloir supprimer cet enregistrement?",
     
      icon: "warning",
      buttons: ["NON","OUI"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          let i =this.L.indexOf(cc)
          
          this.categorieProjetService.deleteCategoriesProjet(cc.categoriesProjetId).subscribe(
            
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
