import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cahiercharges } from 'src/app/models/cahiercharges';
import { CategoriesProjet } from 'src/app/models/categories-projet';
import { CahierchargesService } from 'src/app/services/cahiercharges/cahiercharges.service';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';

@Component({
  selector: 'app-cahiercharges-edit',
  templateUrl: './cahiercharges-edit.component.html',
  styleUrls: ['./cahiercharges-edit.component.css']
})
export class CahierchargesEditComponent implements OnInit {
  c= new Cahiercharges();
  fff :CategoriesProjet[];
  
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
    this.categorieProjetService.getAllCategoriesProjet().subscribe((response:any)=>{
      console.log(response);
      this.fff=response
  });
  }

  onSubmit(): void {
    this.cahierchargesService.createcahiercharges(this.c,this.selectedTeam).subscribe(
      ()=>  (this.router.navigate(['/home/CahiersdeChargeList']))
    )
  }
  onReset(form: NgForm): void {
    form.reset();
  }
 



}
