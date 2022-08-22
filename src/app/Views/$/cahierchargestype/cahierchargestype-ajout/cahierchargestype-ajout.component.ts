import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cahierchargestype } from 'src/app/models/cahierchargestype';
import { Categoriesprojet } from 'src/app/models/categoriesprojet';
import { CahierchargestypeService } from 'src/app/services/cahierchargestype/cahierchargestype.service';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';

@Component({
  selector: 'app-cahierchargestype-ajout',
  templateUrl: './cahierchargestype-ajout.component.html',
  styleUrls: ['./cahierchargestype-ajout.component.css']
})
export class CahierchargestypeAjoutComponent implements OnInit {

  fff :Categoriesprojet[];
  fun:Categoriesprojet;
  categorie=new Categoriesprojet();
  cc:any[];
  i:any;
  c= new Cahierchargestype();

	
  

  constructor(private cahierchargestypeService : CahierchargestypeService,private categorieProjetService : CategoriesprojetService,private router: Router, private activated:ActivatedRoute) { }

  form = {
  
    cahierChargesLibelle: '',
    cahierChargesDescription: '',
    categoriesprojettype:'',
    acceptTerms: false,
};



onSubmit(): void {
  this.c.categoriesprojettype=this.categorie;
  this.cahierchargestypeService.createcahierchargestype(this.c).subscribe(
    ()=>  (this.router.navigate(['/home/cahierchargeTypeList']))
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
