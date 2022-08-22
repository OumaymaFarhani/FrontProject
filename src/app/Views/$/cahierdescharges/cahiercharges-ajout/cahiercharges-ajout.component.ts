import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cahiercharges } from 'src/app/models/cahiercharges';
import { Categoriesprojet } from 'src/app/models/categoriesprojet';
import { CahierchargesService } from 'src/app/services/cahiercharges/cahiercharges.service';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';
import { CommonModule } from '@angular/common';
import { Cahierclausemodel } from 'src/app/models/cahierclausemodel';
@Component({
  selector: 'app-cahiercharges-ajout',
  templateUrl: './cahiercharges-ajout.component.html',
  styleUrls: ['./cahiercharges-ajout.component.css']
})
export class CahierchargesAjoutComponent implements OnInit {
  fff :Categoriesprojet[];
  fun:Categoriesprojet;
  cc:any[];
  categorie=new Categoriesprojet();
  i:any;
  c= new Cahiercharges();
  cahierclause=new Cahierclausemodel();
	
  selectedTeam = '1';
  onSelected(value:string): void {
		this.selectedTeam = value;
    console.log(this.selectedTeam );
	}

  constructor(private cahierchargesService : CahierchargesService,private categorieProjetService : CategoriesprojetService,private router: Router, private activated:ActivatedRoute) { }

  form = {
  
    cahierChargesLibelle: '',
    cahierChargesDescription: '',
    categoriesProjetId:'',
    acceptTerms: false,
};



  ngOnInit(): void {
    this.categorieProjetService.getAllCategoriesProjet().subscribe((response:any)=>{
      console.log(response);
      this.fff=response
  });
 
  }


  onSubmit(): void {
    this.c.categoriesprojet=this.categorie
    this.cahierchargesService.createcahiercharges1(this.c).subscribe(
      ()=>  (this.router.navigate(['/home/CahiersdeChargeList']))
    )
  }

  onReset(form: NgForm): void {
    form.reset();
  }
 

}
