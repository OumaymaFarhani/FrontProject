import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cahiercharges } from 'src/app/models/cahiercharges';
import { CategoriesProjet } from 'src/app/models/categories-projet';
import { CahierchargesService } from 'src/app/services/cahiercharges/cahiercharges.service';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cahiercharges-ajout',
  templateUrl: './cahiercharges-ajout.component.html',
  styleUrls: ['./cahiercharges-ajout.component.css']
})
export class CahierchargesAjoutComponent implements OnInit {
  fff :CategoriesProjet[];
  fun:CategoriesProjet;
  cc:any[];
  i:any;
  c= new Cahiercharges();

	
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



onSubmit(): void {
  this.cahierchargesService.createcahiercharges(this.c,this.selectedTeam).subscribe(
    ()=>  (this.router.navigate(['/home/CahiersdeChargeList']))
  )
}
  ngOnInit(): void {
    this.categorieProjetService.getAllCategoriesProjet().subscribe((response:any)=>{
      console.log(response);
      this.fff=response
  });
  }

  onReset(form: NgForm): void {
    form.reset();
  }
 

}
