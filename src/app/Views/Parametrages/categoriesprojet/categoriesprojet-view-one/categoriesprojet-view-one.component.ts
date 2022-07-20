import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesProjet } from 'src/app/models/categories-projet';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';

@Component({
  selector: 'app-categoriesprojet-view-one',
  templateUrl: './categoriesprojet-view-one.component.html',
  styleUrls: ['./categoriesprojet-view-one.component.css']
})
export class CategoriesprojetViewOneComponent implements OnInit {

  c= new CategoriesProjet();

  constructor(private categorieProjetService : CategoriesprojetService,private router: Router, private activated:ActivatedRoute) { }

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

}
