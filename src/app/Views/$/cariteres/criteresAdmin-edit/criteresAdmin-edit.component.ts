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
import { NatureCritere } from 'src/app/models/nature-critere';
import { TypeCritere } from 'src/app/models/type-critere';
import { Typecahiercharges } from 'src/app/models/typecahiercharges';
import { CahierchargesService } from 'src/app/services/cahiercharges/cahiercharges.service';
import { CahierclausesadministrativesService } from 'src/app/services/cahierclausesadministratives/cahierclausesadministratives.service';
import { CahierclausesfinancierestechniquesService } from 'src/app/services/cahierclausesfinancierestechniques/cahierclausesfinancierestechniques.service';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';
import { CriteresService } from 'src/app/services/criteres/criteres.service';
import { CriterescahierclausesadministrativesService } from 'src/app/services/criterescahierclausesadministratives/criterescahierclausesadministratives.service';
import { CriterescahierclausesfinancierestechniquesService } from 'src/app/services/criterescahierclausesfinancierestechniques/criterescahierclausesfinancierestechniques.service';
import { TypecahierchargesService } from 'src/app/services/typecahiercharges/typecahiercharges.service';
import { TypecritereService } from 'src/app/services/typecritere/typecritere.service';


@Component({
  selector: 'app-criteres-edit',
  templateUrl: './criteres-edit.component.html',
  styleUrls: ['./criteres-edit.component.css']
})
export class CriteresAdminEditComponent implements OnInit {
  fff :Criteres[];
  fun:Criteres;

  ttt :TypeCritere[];
  tun:TypeCritere;
  cahierAdmin=new Cahierclausesadministratives();
  typecritere1=new TypeCritere();
  naturecritere1=new NatureCritere();
  typeCahierCharge:Typecahiercharges;
  listTypeCahierCharge:Typecahiercharges[];
  cc:any[];
  id:number;
  id1:number;
  parentRouteId: number;
  
  c= new Cahiercharges();
  categorie=new Categoriesprojet();
  cahierChargesId:number;
  critere=new Criteres();
  cahieadmin=new Cahierclausesadministratives();
  cca=new Criterescahierclausesadministratives();
  critereAdmin=new Criterescahierclausesadministratives();
  critereFinanciere=new Criterescahierclausesfinancierestechniques();
  constructor(private cahierchargesService:CahierchargesService,private critereFinancierService:CriterescahierclausesfinancierestechniquesService,private criService:CriteresService,private critereAdminService:CriterescahierclausesadministrativesService,private cahierclausesadministrativesService :CahierclausesadministrativesService,private cahierclausesfinancierestechniquesService: CahierclausesfinancierestechniquesService,private categorieProjetService : CategoriesprojetService,private typecritereService:TypecritereService,private router: Router, private activated:ActivatedRoute) { }
  form = {
  
    criteresId: '',
    criteres: '',
    typecritere:'',
    naturecritere:'',
    criteresLibelle:'',
    criteresAbreviation:'',
    criteresElimination:'',
    criteresCahierClausesAdministrativesElimination:'',
    criteresDescription:'',
    categoriesprojet:'',
    acceptTerms: false,
};

  ngOnInit(): void {
    console.log("-/-/-/-/-/-/-/-/-/->"+this.cca)
    this.activated.paramMap.subscribe(
      d=>{
       
        let id1 =Number(this.activated.snapshot.paramMap.get('id1'));
        this.cahierclausesadministrativesService.getONEClauseAdmin(id1).subscribe(
          d=>{
            this.cahierAdmin=d;
            } )  
      } );
    this.activated.paramMap.subscribe(
      d=>{
        let id2 =Number(this.activated.snapshot.paramMap.get('id2'));
        this.criService.getOneCritere(id2).subscribe(
          d=>{
            this.critere=d;
            })  
      });
    this.activated.paramMap.subscribe(
      d=>{
        let id1 =Number(d.get('id1'));
        let id2 =Number(d.get('id2'));
        this.critereAdminService.getOneCritere(id1,id2).subscribe(
          d=>{
            this.cca=d;
            console.log("-/-/-/-/-/-/-/-/-/->"+this.cca.criteresCahierClausesAdministrativesElimination)
            }
        )  
      }
    );
    this.typecritereService.getAlltypeCritere().subscribe((response:any)=>{
      console.log(response);
      this.ttt=response
      });
 
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
   
  }
onSubmit(): void {
 
  this.critereAdminService.updadteCritereAdmin(this.cca).subscribe(
    ()=>  (this.router.navigate(['/home/CahiersdeChargeList']))
  )
  
}




onReset(form: NgForm): void {
  form.reset();
}


}
