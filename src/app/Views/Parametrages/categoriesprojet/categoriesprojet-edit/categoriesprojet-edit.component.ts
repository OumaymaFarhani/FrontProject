import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesProjet } from 'src/app/models/categories-projet';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';

@Component({
  selector: 'app-categoriesprojet-edit',
  templateUrl: './categoriesprojet-edit.component.html',
  styleUrls: ['./categoriesprojet-edit.component.css']
})
export class CategoriesprojetEditComponent implements OnInit {

  c= new CategoriesProjet();

  constructor(private categorieProjetService : CategoriesprojetService,private router: Router, private activated:ActivatedRoute) { }

  form = {
  
      categoriesProjetLibelle: '',
      categoriesProjetDescription: '',
      acceptTerms: false,
  };

  ngOnInit(): void {
    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        this.categorieProjetService.getOneCategoriesProjet(id).subscribe(
          d=>{
            this.c=d;
            }
        )  
      }
    );
  }
  
  onSubmit(): void {
    this.categorieProjetService.updateCategoriesProjet(this.c).subscribe(
      ()=>  (this.router.navigate(['/home/categoriesprojetList']))
    )
  }
  onReset(form: NgForm): void {
    form.reset();
  }


saveUpdate(){
  this.categorieProjetService.updateCategoriesProjet(this.c).subscribe(
    ()=>  (this.router.navigate(['/home/categoriesprojetList']))
    )
  }
    return(){
      this.router.navigate(['/home/categoriesprojetList']);
    }


}
