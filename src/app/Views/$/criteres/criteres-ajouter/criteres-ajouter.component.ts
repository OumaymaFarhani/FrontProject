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
import { NaturecritereService } from 'src/app/services/naturecritere/naturecritere.service';
import { TypecahierchargesService } from 'src/app/services/typecahiercharges/typecahiercharges.service';
import { TypecritereService } from 'src/app/services/typecritere/typecritere.service';

@Component({
  selector: 'app-criteres-ajout',
  templateUrl: './criteres-ajout.component.html',
  styleUrls: ['./criteres-ajout.component.css']
})
export class CriteresAjouterComponent implements OnInit {
  tcri=new TypeCritere();
  ncri=new NatureCritere();

ttt:TypeCritere[];
tun:TypeCritere;
nnn:NatureCritere[];
nun:NatureCritere;
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
  constructor(private critereService:CriteresService,private typecritereService:TypecritereService,private naturecritereService:NaturecritereService,private critereAdminService:CriterescahierclausesadministrativesService,private critereFinancierService:CriterescahierclausesfinancierestechniquesService,private cahierchargesService : CahierchargesService,private typeCahierChargeService: TypecahierchargesService,private cahierclausesadministrativesService :CahierclausesadministrativesService,private cahierclausesfinancierestechniquesService: CahierclausesfinancierestechniquesService,private categorieProjetService : CategoriesprojetService,private router: Router, private activated:ActivatedRoute) { }
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
    this.categorieProjetService.getAllCategoriesProjet().subscribe((response:any)=>{
      this.fff=response
  });

  this.typecritereService.getAlltypeCritere().subscribe((response:any)=>{
    this.ttt=response
});
this.naturecritereService.getAllNatureCritere().subscribe((response:any)=>{
  this.nnn=response
});

  
  }
onSubmit(): void {
  this.critere.typecritere=this.tcri;
  this.critere.naturecritere=this.ncri;
  this.critere.categoriesprojet=this.categorie
  this.critereService.createCritere(this.critere).subscribe(
    ()=>  (this.router.navigate(['/home/critere']))
  )
 
}
onReset(form: NgForm): void {
  form.reset();
}

}
