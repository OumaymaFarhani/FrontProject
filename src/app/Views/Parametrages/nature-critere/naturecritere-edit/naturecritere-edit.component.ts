import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NatureCritere } from '../../../../models/nature-critere';
import { NaturecritereService } from '../../../../services/naturecritere/naturecritere.service';

@Component({
  selector: 'app-naturecritere-edit',
  templateUrl: './naturecritere-edit.component.html',
  styleUrls: ['./naturecritere-edit.component.css']
})
export class NaturecritereEditComponent implements OnInit {

  n=new NatureCritere();
  constructor(private naturecritereservice : NaturecritereService, private router: Router, private activated:ActivatedRoute) { }


  form = {
    
    natureCritereLibelle: '',
    natureCritereLibelleAr: '',
    natureCritereDescription: '',
    natureCritereDescriptionAr: '',
    acceptTerms: false,
  };
  


  ngOnInit(): void {
    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        this.naturecritereservice.getOneNatureCritere(id).subscribe(
          d=>{
            this.n=d;
            }
        )  
      }
    );
  }

  

  onSubmit(): void {
    this.naturecritereservice.updateNatureCritere(this.n).subscribe(
      ()=>  (this.router.navigate(['/home/naturecritereList']))
    )
  }
  onReset(form: NgForm): void {
    form.reset();
  }


saveUpdate(){
  this.naturecritereservice.updateNatureCritere(this.n).subscribe(
    ()=>  (this.router.navigate(['/home/naturecritereList']))
    )
  }
    return(){
      this.router.navigate(['/home/naturecritereList']);
    }

}
