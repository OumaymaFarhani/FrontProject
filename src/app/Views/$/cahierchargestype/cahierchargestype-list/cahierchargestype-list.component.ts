import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cahierchargestype } from 'src/app/models/cahierchargestype';
import { Categoriesprojet } from 'src/app/models/categoriesprojet';
import { CahierchargestypeService } from 'src/app/services/cahierchargestype/cahierchargestype.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-cahierchargestype-list',
  templateUrl: './cahierchargestype-list.component.html',
  styleUrls: ['./cahierchargestype-list.component.css']
})
export class CahierchargestypeListComponent implements OnInit {
  title="pagination";
  page : number=1;
  count : number = 0;
  tableSize: number =10;
  tableSizes : any=['ALL',5 ,10 ,15 ,20];
  L: any = [];
  d:any[];
  categoriesProjet:Categoriesprojet;
  cahierchargestype: Cahierchargestype[];
  displayedColumns= [ 'cahierChargesId','cahierChargesLibelle','cahierChargesDescription','categoriesprojettype','Operations']
  dataSource !:MatTableDataSource<any>;
  @ViewChild('paginator') paginator! :MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private cahierchargesTypeService : CahierchargestypeService) { }

  ngOnInit(): void {
    this.cahierchargesTypeService.getAllcahierchargestype().subscribe((response:any)=>{
     
      this.dataSource=new MatTableDataSource(response);
      console.log(response);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.matSort;
  });}



  filterData ($event:any) {
    this.dataSource.filter=$event.target.value;

  }
   // Delete 
   deletee(ch:Cahierchargestype,id:number) {
    
    swal({
      title: "Etes-vous sûr de vouloir supprimer cet enregistrement?",
     
      icon: "warning",
      buttons: ["NON","OUI"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          let i =this.L.indexOf(ch)
          
          this.cahierchargesTypeService.deletecahiercharges(ch.cahierChargesId).subscribe(
            
            ()=>{this.L.splice(i,1);
           /*
             this.nature = this.nature.filter(n => {
          
                console.log(this.dataSource);
                return n.natureCritereId != id;

                      
 */
this.ngOnInit();
       
       
              });
         ;
          
        } 
      });
 
  } 
  


}
