import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cahiercharges } from 'src/app/models/cahiercharges';
import { Cahierclausemodel } from 'src/app/models/cahierclausemodel';
import { Cahierclausesadministratives } from 'src/app/models/cahierclausesadministratives';
import { Cahierclausesfinancierestechniques } from 'src/app/models/cahierclausesfinancierestechniques';
import { Categoriesprojet } from 'src/app/models/categoriesprojet';
import { Typecahiercharges } from 'src/app/models/typecahiercharges';
import { CahierchargesService } from 'src/app/services/cahiercharges/cahiercharges.service';
import { CahierclausesadministrativesService } from 'src/app/services/cahierclausesadministratives/cahierclausesadministratives.service';
import { CahierclausesfinancierestechniquesService } from 'src/app/services/cahierclausesfinancierestechniques/cahierclausesfinancierestechniques.service';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';
import { TypecahierchargesService } from 'src/app/services/typecahiercharges/typecahiercharges.service';

@Component({
  selector: 'app-cahierclause-ajout',
  templateUrl: './cahierclause-ajout.component.html',
  styleUrls: ['./cahierclause-ajout.component.css']
})
export class CahierclauseAjoutComponent implements OnInit {
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
  clauseFinanciere=new Cahierclausesfinancierestechniques();
  clause=new Cahierclausemodel();
  typeclause:boolean;
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
      d=>{
        this.id =Number(d.get('id'));
        this.cahierchargesService.getOnecahiercharges(this.id).subscribe(
          d=>{
            this.c=d;
            console.log(this.c.cahierChargesId)
         
            }
        )  
      }
      
    );


    this.cahierchargesService.afficherclauserestant(this.id).subscribe((response:any)=>{
      console.log(response);
      this.listTypeCahierCharge=response
  });

  }


  
onSubmit(): void {
  this.clause.cahierChargesId=this.c.cahierChargesId
 this.clause.cahiercharges=this.c;
 this.clause.categoriesprojet=this.c.categoriesprojet
 this.clause.typecahiercharges=this.t
 
 console.log(this.clause.cahierChargesId)
 console.log(this.clause.categoriesprojet)
 console.log("typeeeeeeeeeeeeeee"+this.clause.typecahiercharges)
 console.log(this.clause)
 this.cahierchargesService.ajoutercahierchargesclause(this.clause).subscribe(
     ()=> (
      
      this.router.navigate(['/home/CahiersdeChargeList/'+this.c.cahierChargesId]))

  )




}





onReset(form: NgForm): void {
  form.reset();
}
}
