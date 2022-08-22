import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cahiercharges } from 'src/app/models/cahiercharges';
import { Cahierclausemodel } from 'src/app/models/cahierclausemodel';
import { Cahierclausesadministratives } from 'src/app/models/cahierclausesadministratives';
import { Categoriesprojet } from 'src/app/models/categoriesprojet';
import { Criteres } from 'src/app/models/criteres';
import { Criterescahierclausesadministratives } from 'src/app/models/criterescahierclausesadministratives';
import { Criterescahierclausesfinancierestechniques } from 'src/app/models/criterescahierclausesfinancierestechniques';
import { Typecahiercharges } from 'src/app/models/typecahiercharges';
import { CahierchargesService } from 'src/app/services/cahiercharges/cahiercharges.service';
import { CahierclausesadministrativesService } from 'src/app/services/cahierclausesadministratives/cahierclausesadministratives.service';
import { CahierclausesfinancierestechniquesService } from 'src/app/services/cahierclausesfinancierestechniques/cahierclausesfinancierestechniques.service';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';
import { CriterescahierclausesadministrativesService } from 'src/app/services/criterescahierclausesadministratives/criterescahierclausesadministratives.service';
import { CriterescahierclausesfinancierestechniquesService } from 'src/app/services/criterescahierclausesfinancierestechniques/criterescahierclausesfinancierestechniques.service';
import { TypecahierchargesService } from 'src/app/services/typecahiercharges/typecahiercharges.service';

@Component({
  selector: 'app-criteres-ajout',
  templateUrl: './criteres-ajout.component.html',
  styleUrls: ['./criteres-ajout.component.css']
})
export class CriteresAjoutComponent implements OnInit {
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
  cahierChargesId:number;
  critere=new Criteres();
  critereAdmin=new Criterescahierclausesadministratives();
  critereFinanciere=new Criterescahierclausesfinancierestechniques();
  constructor(private critereAdminService:CriterescahierclausesadministrativesService,private critereFinancierService:CriterescahierclausesfinancierestechniquesService,private cahierchargesService : CahierchargesService,private typeCahierChargeService: TypecahierchargesService,private cahierclausesadministrativesService :CahierclausesadministrativesService,private cahierclausesfinancierestechniquesService: CahierclausesfinancierestechniquesService,private categorieProjetService : CategoriesprojetService,private router: Router, private activated:ActivatedRoute) { }
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

  ngOnInit(): void {
    this.activated.paramMap.subscribe(
      d=>{
        this.id =Number(d.get('id'));
        this.cahierchargesService.getOnecahiercharges(this.id).subscribe(
          d=>{
            this.c=d;
         
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
 if(this.c.cahierChargesLibelle=="CCAG" ||this.c.cahierChargesLibelle=="CCAP"){
  this.critereAdminService.createCritereAdmin(this.critereAdmin).subscribe(
    ()=>  (this.router.navigate(['/home/CahiersdeChargeList']))
  )}
  else{
    this.critereFinancierService.createCritereFinanciere(this.critereFinanciere).subscribe(
      ()=>  (this.router.navigate(['/home/CahiersdeChargeList']))
    )
  }
}
onReset(form: NgForm): void {
  form.reset();
}

}
