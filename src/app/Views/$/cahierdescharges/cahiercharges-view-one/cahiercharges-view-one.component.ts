import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Cahiercharges } from 'src/app/models/cahiercharges';
import { CahierchargesService } from 'src/app/services/cahiercharges/cahiercharges.service';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';

@Component({
  selector: 'app-cahiercharges-view-one',
  templateUrl: './cahiercharges-view-one.component.html',
  styleUrls: ['./cahiercharges-view-one.component.css']
})
export class CahierchargesViewOneComponent implements OnInit {
  c= new Cahiercharges();
  title="pagination";
  page : number=1;
  count : number = 0;
  tableSize: number =10;
  tableSizes : any=['ALL',5 ,10 ,15 ,20];
  L: any = [];
  d:any[];

  cahiercharges: Cahiercharges[];
  displayedColumns= [ 'cahierChargesId','cahierChargesLibelle','cahierChargesDescription','typeProjet','categoriesProjet','Operations']
  dataSource !:MatTableDataSource<any>;
  @ViewChild('paginator') paginator! :MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private cahierchargesService : CahierchargesService,private categorieProjetService : CategoriesprojetService,private router: Router, private activated:ActivatedRoute) { }

  ngOnInit(): void {


    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        this.cahierchargesService.getOnecahiercharges(id).subscribe(
          d=>{
            this.c=d;
            }
        )  
      }
    );
    this.cahierchargesService.getAllcahiercharges().subscribe((response:any)=>{
     
      this.dataSource=new MatTableDataSource(response);
      console.log(response);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.matSort;
  });
  }
 



  filterData ($event:any) {
    this.dataSource.filter=$event.target.value;

  }
}
