import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NatureCritere } from '../../../../models/nature-critere';
import { NaturecritereService } from '../../../../services/naturecritere/naturecritere.service';

@Component({
  selector: 'app-naturecritere-ajout',
  templateUrl: './naturecritere-ajout.component.html',
  styleUrls: ['./naturecritere-ajout.component.css']
})
export class NaturecritereAjoutComponent implements OnInit {

  n=new NatureCritere();
  constructor(private naturecritereservice : NaturecritereService, private router: Router, private activated:ActivatedRoute) { }



  form = {
    
    natureCritereLibelle: '',
    natureCritereLibelleAr: '',
    natureCritereDescription: '',
    natureCritereDescriptionAr: '',
    acceptTerms: false,
  };
  onSubmit(): void {
    this.naturecritereservice.createNatureCritere(this.n).subscribe(
      ()=>  (this.router.navigate(['/home/naturecritereList']))
    )
  }
  onReset(form: NgForm): void {
    form.reset();
  }



  ngOnInit(): void {
    
    
  }


  
  savenatureCritere(){
    this.naturecritereservice.createNatureCritere(this.n).subscribe(
      ()=>  (this.router.navigate(['/home/naturecritereList']))
    )
  }
    return(){
      this.router.navigate(['/home/naturecritereList']);
    }


   
}
