
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Categoriesprojet } from 'src/app/models/categoriesprojet';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';
import { CriteresService } from 'src/app/services/criteres/criteres.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-list-criteres',
  templateUrl: './list-criteres.component.html',
  styleUrls: ['./list-criteres.component.css']
})
export class ListCriteresComponent implements OnInit {

  title="pagination";
  page : number=1;
  count : number = 0;
  tableSize: number =10;
  tableSizes : any=['ALL',5 ,10 ,15 ,20];
  L: any = [];
  d:any[];
  categorie: Categoriesprojet[];
  displayedColumns= [  'criteresId','criteresLibelle','criteresDescription','typecritere','naturecritere','categoriesprojet','Operations']
  dataSource !:MatTableDataSource<any>;
  @ViewChild('paginator') paginator! :MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private categorieProjetService : CategoriesprojetService,private critereService:CriteresService) { }

  ngOnInit(): void {
    this.critereService.getAllCritere().subscribe((response:any)=>{
     
      this.dataSource=new MatTableDataSource(response);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.matSort;
      
    });
  }

  filterData ($event:any) {
    this.dataSource.filter=$event.target.value;

  }
   // Delete 
   deletee(cc:Categoriesprojet,id:number) {
    
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
this.ngOnInit();
              });
         ;
        } 
      });
 
  } 
  
}
