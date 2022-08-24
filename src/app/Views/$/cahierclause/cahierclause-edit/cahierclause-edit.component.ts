import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cahiercharges } from 'src/app/models/cahiercharges';
import { Cahierclausemodel } from 'src/app/models/cahierclausemodel';
import { Cahierclausesadministratives } from 'src/app/models/cahierclausesadministratives';
import { Categoriesprojet } from 'src/app/models/categoriesprojet';
import { Typecahiercharges } from 'src/app/models/typecahiercharges';
import { CahierchargesService } from 'src/app/services/cahiercharges/cahiercharges.service';
import { CahierclausesadministrativesService } from 'src/app/services/cahierclausesadministratives/cahierclausesadministratives.service';
import { CahierclausesfinancierestechniquesService } from 'src/app/services/cahierclausesfinancierestechniques/cahierclausesfinancierestechniques.service';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';
import { TypecahierchargesService } from 'src/app/services/typecahiercharges/typecahiercharges.service';

@Component({
  selector: 'app-cahierclause-edit',
  templateUrl: './cahierclause-edit.component.html',
  styleUrls: ['./cahierclause-edit.component.css']
})
export class CahierclauseEditComponent implements OnInit {

  fff :Categoriesprojet[];
  fun:Categoriesprojet;
  typeCahierCharge:Typecahiercharges;
  listTypeCahierCharge:Typecahiercharges[];
  cc:any[];
  id:number;
  parentRouteId: number;
  private sub: any;
  c= new Cahiercharges();
  categorie=new Categoriesprojet();
  t=new Typecahiercharges();
  cahierChargesId:number;
  ca=new Cahierclausesadministratives();
  clause=new Cahierclausemodel();
  model=new Cahierclausemodel();
  constructor(private cahierchargesService : CahierchargesService,private typeCahierChargeService: TypecahierchargesService,private cahierclausesadministrativesService :CahierclausesadministrativesService,private cahierclausesfinancierestechniquesService: CahierclausesfinancierestechniquesService,private categorieProjetService : CategoriesprojetService,private router: Router, private activated:ActivatedRoute) { }
  form = {
  
    typeCahierChargesId: '',
    cahierChargesId: '',
    categoriesProjetId:'',
    libelle:'',
    description:'',
    
    typecahiercharges:'',
    cahierDesClauseFinancierTechnqueLibelle:'',
    cahierClausesFinancieresTechniquesDescription:'',
    acceptTerms: false,
};

  ngOnInit(): void {  
    this.activated.paramMap.subscribe(
      a=>{
        let id =Number(this.activated.snapshot.paramMap.get('idType'));
        this.typeCahierChargeService.getOneTypeCahierCharge(id).subscribe(
          a=>{
            this.t=a;
             }
             
        )  
        console.log("oumaaymaaaaaaaaaaa*****************"+this.t.typeCahierChargesLibelle)
          
      }
    );
    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(this.activated.snapshot.paramMap.get('idch'));
         
        this.cahierchargesService.getOnecahiercharges(id).subscribe(
          d=>{
            this.c=d;
            console.log("aloooooooooooooooooooooooooooooooooooo"+this.c.cahierChargesId)
         
            }
        )  
      }
      
    );
  
    this.activated.paramMap.subscribe(
      b=>{
        let id =Number(this.activated.snapshot.paramMap.get('idClause'));
        this.cahierclausesadministrativesService.getONEClause(id).subscribe(
          b=>{
            this.clause=b; console.log("claaaaaaaaaaaaaaause"+this.clause.cahierClausesAdministrativesId)
     
             }
        )  
        }
    );   
    


  }


  
onSubmit(): void { 
  if(this.clause.typecahiercharges.typeCahierChargesLibelle=="CCAG" || this.clause.typecahiercharges.typeCahierChargesLibelle=="CPS" || this.clause.typecahiercharges.typeCahierChargesLibelle=="CCAP") {
    
  this.clause.libelle=this.clause.cahierClausesAdministrativesLibelle
  this.clause.description=this.clause.cahierClausesAdministrativeDescription
 this.cahierchargesService.updateclause(this.clause).subscribe(
     ()=> (
     
      this.router.navigate(['/home/CahiersdeChargeList/'+this.c.cahierChargesId]))
  )
     }
     else{
      this.clause.libelle=this.clause.cahierDesClauseFinancierTechnqueLibelle
      this.clause.description=this.clause.cahierClausesFinancieresTechniquesDescription
     this.cahierchargesService.updateclause(this.clause).subscribe(
         ()=> (
         
          this.router.navigate(['/home/CahiersdeChargeList/'+this.c.cahierChargesId]))
      )
     }


  console.log("**************************************"+this.clause.categoriesprojet)
}
onReset(form: NgForm): void {
  form.reset();
}
}
