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
  selector: 'app-cahierclause-finan-edit',
  templateUrl: './cahierclause-finan-edit.component.html',
  styleUrls: ['./cahierclause-finan-edit.component.css']
})
export class CahierclauseFinanEditComponent implements OnInit {

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
 
  clause=new Cahierclausemodel();
  model=new Cahierclausemodel();
  a:boolean;
  f:boolean;
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
    
    console.log("testIdCh",this.activated.snapshot.paramMap.get('etatFinenciere'));
    console.log("testidClause",this.activated.snapshot.paramMap.get('etatAdmin'));
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
        this.cahierclausesfinancierestechniquesService.getONEClause(id).subscribe(
          b=>{
            this.clause=b; console.log("claaaaaaaaaaaaaaause"+this.clause.cahierClausesFinancieresTechniquesId)
     
             }
        )  
        }
    );   
    


  }


  
onSubmit(): void { 
   
      this.clause.libelle=this.clause.cahierDesClauseFinancierTechnqueLibelle
      this.clause.description=this.clause.cahierClausesFinancieresTechniquesDescription
     this.cahierchargesService.updateclause(this.clause).subscribe(
         ()=> (
         
          this.router.navigate(['/home/CahiersdeChargeList/'+this.c.cahierChargesId]))
      )
      


  console.log("**************************************"+this.clause.categoriesprojet)
}
onReset(form: NgForm): void {
  form.reset();
}
}
