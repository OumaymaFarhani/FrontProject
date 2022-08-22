import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Cahiercharges } from 'src/app/models/cahiercharges';
import { Cahierclausemodel } from 'src/app/models/cahierclausemodel';
import { Cahierclausesadministratives } from 'src/app/models/cahierclausesadministratives';
import { Criteres } from 'src/app/models/criteres';
import { Criterescahierclausesadministratives } from 'src/app/models/criterescahierclausesadministratives';
import { Typecahiercharges } from 'src/app/models/typecahiercharges';
import { CahierchargesService } from 'src/app/services/cahiercharges/cahiercharges.service';
import { CahierclausesadministrativesService } from 'src/app/services/cahierclausesadministratives/cahierclausesadministratives.service';
import { CahierclausesfinancierestechniquesService } from 'src/app/services/cahierclausesfinancierestechniques/cahierclausesfinancierestechniques.service';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';
import { CriteresService } from 'src/app/services/criteres/criteres.service';
import { CriterescahierclausesadministrativesService } from 'src/app/services/criterescahierclausesadministratives/criterescahierclausesadministratives.service';
import { TypecahierchargesService } from 'src/app/services/typecahiercharges/typecahiercharges.service';

@Component({
  selector: 'app-criteres-list',
  templateUrl: './criteres-list.component.html',
  styleUrls: ['./criteres-list.component.css']
})
export class CriteresListComponent implements OnInit {
  etatInsertCritere:boolean=false;
  c= new Cahiercharges();
  t= new Typecahiercharges();
  clauseAdmin1=new Cahierclausesadministratives();
  clauseAdmin=new Cahierclausemodel();
  critere=new Criteres();
  critereAdmin=new Criterescahierclausesadministratives();
  displayedColumns= [ 'criteresId','criteresLibelle','criteresDescription','Abreviation','NivAbrv','SousCriter','Operations']
  dataSource !:MatTableDataSource<any>;
  
  @ViewChild('paginator') paginator! :MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  form = {
  
    criteresId: '',
    criteres: '',
    typecritere:'',
    naturecritere:'',
    criteresLibelle:'',
    criteresAbreviation:'',
    criteresElimination:'',
    criteresDescription:'',
    categoriesprojet:'',
    acceptTerms: false,
};
  constructor(private critereService:CriteresService,private router: Router,private criterescahierclausesadministrativesService:CriterescahierclausesadministrativesService, private activated:ActivatedRoute,private cahierchargesService : CahierchargesService,private typeCahierChargeService: TypecahierchargesService,private cahierclausesadministrativesService :CahierclausesadministrativesService,private cahierclausesfinancierestechniquesService: CahierclausesfinancierestechniquesService,private categorieProjetService : CategoriesprojetService) { }

  ngOnInit(): void {
    
    console.log("testIdCh",this.activated.snapshot.paramMap.get('idCriter'));
   
    console.log("testIdCh",this.activated.snapshot.paramMap.get('idch'));
    console.log("testidClause",this.activated.snapshot.paramMap.get('idClause'));
    console.log("testidType",this.activated.snapshot.paramMap.get('idType'));
 
    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(this.activated.snapshot.paramMap.get('idch'));
        this.cahierchargesService.getOnecahiercharges(id).subscribe(
          d=>{
            this.c=d;
            console.log(this.c)
            }
        )  
      }
    );
 
    this.activated.paramMap.subscribe(
      a=>{
        let id =Number(this.activated.snapshot.paramMap.get('idType'));
        this.typeCahierChargeService.getOneTypeCahierCharge(id).subscribe(
          a=>{
            this.t=a;
            console.log("testttttt"+this.t.typeCahierChargesId)
            }
        )  
      }
    );
    this.activated.paramMap.subscribe(
      b=>{
        let id =Number(this.activated.snapshot.paramMap.get('idClause'));
        this.cahierclausesadministrativesService.getONEClauseAdmin(id).subscribe(
          b=>{
            this.clauseAdmin1=b;
            console.log("messsage"+this.clauseAdmin1)
            }
        )  
      }
    );

    this.activated.paramMap.subscribe(
      a=>{
        let id =Number(this.activated.snapshot.paramMap.get('idClause'));
        this.criterescahierclausesadministrativesService.getAllCritereAdmin(id).subscribe((response:any)=>{
          this.dataSource=new MatTableDataSource(response);
          console.log(response);
          this.dataSource.paginator= this.paginator;
          this.dataSource.sort= this.matSort;
        } 
      
    );
  

 

}
    )

    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        this.critereService.getOneCritere(id).subscribe(
          d=>{
            this.critere=d;
            console.log(this.critere)
            }
        )  
      }
    );
}

changeEtat(){
  this.etatInsertCritere=true;
}

changeEtat1(){
  this.etatInsertCritere=false;
}
onSubmit(): void {

}





onReset(form: NgForm): void {
  form.reset();
}

}