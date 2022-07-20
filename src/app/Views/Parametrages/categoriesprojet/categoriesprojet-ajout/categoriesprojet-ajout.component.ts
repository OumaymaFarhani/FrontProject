import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesProjet } from 'src/app/models/categories-projet';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';

@Component({
  selector: 'app-categoriesprojet-ajout',
  templateUrl: './categoriesprojet-ajout.component.html',
  styleUrls: ['./categoriesprojet-ajout.component.css']
})
export class CategoriesprojetAjoutComponent implements OnInit {

  c= new CategoriesProjet();

  constructor(private categorieProjetService : CategoriesprojetService,private router: Router, private activated:ActivatedRoute) { }

  form = {
  
      categoriesProjetLibelle: '',
      categoriesProjetDescription: '',
      acceptTerms: false,
  };

  onSubmit(): void {
    this.categorieProjetService.createcategoriesProjet(this.c).subscribe(
      ()=>  (this.router.navigate(['/home/categoriesprojetList']))
    )
  }
  onReset(form: NgForm): void {
    form.reset();
  }
  ngOnInit(): void {
  }

}
