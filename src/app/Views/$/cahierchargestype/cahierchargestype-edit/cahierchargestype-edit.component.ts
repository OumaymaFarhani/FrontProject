import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cahierchargestype } from 'src/app/models/cahierchargestype';
import { Categoriesprojet } from 'src/app/models/categoriesprojet';
import { CahierchargestypeService } from 'src/app/services/cahierchargestype/cahierchargestype.service';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';

@Component({
  selector: 'app-cahierchargestype-edit',
  templateUrl: './cahierchargestype-edit.component.html',
  styleUrls: ['./cahierchargestype-edit.component.css']
})
export class CahierchargestypeEditComponent implements OnInit {
  c= new Cahierchargestype();
  fff :Categoriesprojet[];
  fun:Categoriesprojet;
  categorie=new Categoriesprojet();
 
  constructor(private cahierchargestypeService : CahierchargestypeService,private categorieProjetService : CategoriesprojetService,private router: Router, private activated:ActivatedRoute) { }
  form = {
  
    cahierChargesLibelle: '',
    cahierChargesDescription: '',
    categoriesprojettype:'',
    acceptTerms: false,
};
 

  ngOnInit(): void {
    
    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        this.cahierchargestypeService.getOnecahiercharges(id).subscribe(
          d=>{
          //  this.categorie=this.c.categoriesprojettype
            this.c=d;
            }
        )  
      }
    );
    this.categorieProjetService.getAllCategoriesProjet().subscribe((response:any)=>{
      console.log(response);
      this.fff=response
  });
  }

  onSubmit(): void {
   // this.c.categoriesprojettype=this.categorie;
 
    this.cahierchargestypeService.updatecahiercharges(this.c).subscribe(
      ()=>  (this.router.navigate(['/home/cahierchargeTypeList']))
    )




  }
  onReset(form: NgForm): void {
    form.reset();
  }
 



}
