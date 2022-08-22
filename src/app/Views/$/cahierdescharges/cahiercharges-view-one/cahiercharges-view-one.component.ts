
import { Component, OnInit, Output, ViewChild ,EventEmitter} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Cahiercharges } from 'src/app/models/cahiercharges';
import { Cahierclausemodel } from 'src/app/models/cahierclausemodel';
import { Cahierclausesadministratives } from 'src/app/models/cahierclausesadministratives';
import { Cahierclausesfinancierestechniques } from 'src/app/models/cahierclausesfinancierestechniques';
import { Typecahiercharges } from 'src/app/models/typecahiercharges';
import { CahierchargesService } from 'src/app/services/cahiercharges/cahiercharges.service';
import { CahierclausesadministrativesService } from 'src/app/services/cahierclausesadministratives/cahierclausesadministratives.service';
import { CahierclausesfinancierestechniquesService } from 'src/app/services/cahierclausesfinancierestechniques/cahierclausesfinancierestechniques.service';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';
import { TypecahierchargesService } from 'src/app/services/typecahiercharges/typecahiercharges.service';


@Component({
  selector: 'app-cahiercharges-view-one',
  templateUrl: './cahiercharges-view-one.component.html',
  styleUrls: ['./cahiercharges-view-one.component.css']
})
export class CahierchargesViewOneComponent implements OnInit {
  c= new Cahiercharges();
  t= new Typecahiercharges();
  cc= new Cahierclausesadministratives();
  b=new Cahierclausesfinancierestechniques();
  bb:any[];
  title="pagination";
  page : number=1;
  count : number = 0;
  tableSize: number =10;
  tableSizes : any=['ALL',5 ,10 ,15 ,20];
  L: any = [];
  d:any[];
  list:any[];
  listt:any[];
idd:any;
  cahiercharges: Cahiercharges[];
  cahierclausesAdministratives: Cahierclausesadministratives[];
  displayedColumns= [ 'cahierClausesAdministrativesId','cahierClausesAdministrativesLibelle','cahierClausesAdministrativeDescription','typecahiercharges','categoriesprojet','Operations']
  dataSource !:MatTableDataSource<any>;
  displayedColumns1= [ 'cahierClausesFinancieresTechniquesId','cahierDesClauseFinancierTechnqueLibelle','cahierClausesFinancieresTechniquesDescription','typecahiercharges','categoriesprojet','Operations']
  dataSource1 !:MatTableDataSource<any>;
  @ViewChild('paginator') paginator! :MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;
  clauseAdmin1=new Cahierclausesadministratives();
  constructor(private cahierchargesService : CahierchargesService,private typeCahierChargeService: TypecahierchargesService,private cahierclausesadministrativesService :CahierclausesadministrativesService,private cahierclausesfinancierestechniquesService: CahierclausesfinancierestechniquesService,private categorieProjetService : CategoriesprojetService,private router: Router, private activated:ActivatedRoute) { }
 
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

    this.activated.paramMap.subscribe(
      a=>{
        let id =Number(a.get('id'));
        this.typeCahierChargeService.getOneTypeCahierCharge(id).subscribe(
          a=>{
            this.t=a;
            console.log("testttttt"+this.t.typeCahierChargesId)
            }
        )  
      }
    );

    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
    this.cahierclausesadministrativesService.getAllcahierclausesadministratives1(id).subscribe((response:any)=>{
     
     this.dataSource=new MatTableDataSource(response);
      console.log(response);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.matSort;
      this.dataSource1=new MatTableDataSource(response);
      console.log(response);
      this.dataSource1.paginator= this.paginator;
      this.dataSource1.sort= this.matSort;

    /*  this.list=response;
      console.log(this.list);
      */
  });
}
);
/*
this.activated.paramMap.subscribe(
  d=>{
    let id =Number(d.get('id'));
this.cahierclausesfinancierestechniquesService.getAllcahierclausesfinancierestechniques(id).subscribe((response:any)=>{
 
 this.dataSource=new MatTableDataSource(response);
  console.log(response);
  this.dataSource.paginator= this.paginator;
  this.dataSource.sort= this.matSort;

  this.listt=response;
  console.log(this.listt);
});
}
);
*/
      
  }
 



  filterData ($event:any) {
    this.dataSource.filter=$event.target.value;

  }

 
  checkClause(clause:Cahierclausemodel){
    console.log(clause)
    if(clause.typecahiercharges.typeCahierChargesLibelle=="CCAG" || clause.typecahiercharges.typeCahierChargesLibelle=="CPS" || clause.typecahiercharges.typeCahierChargesLibelle=="CCAP") {
     
      this.router.navigate(['/home/CritereList',{idch:this.c.cahierChargesId,idType:this.t.typeCahierChargesId,idClause:clause.cahierClausesAdministrativesId,idCriter:clause.criteresId,CritereAdmin:true}]);
    }

  }
}
