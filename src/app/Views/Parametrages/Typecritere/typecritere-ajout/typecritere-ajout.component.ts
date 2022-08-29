import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeCritere } from 'src/app/models/type-critere';
import { TypecritereService } from 'src/app/services/typecritere/typecritere.service';

@Component({
  selector: 'app-typecritere-ajout',
  templateUrl: './typecritere-ajout.component.html',
  styleUrls: ['./typecritere-ajout.component.css']
})
export class TypecritereAjoutComponent implements OnInit {

 
  tc=new TypeCritere();
  constructor(private typecritereService : TypecritereService, private router: Router, private activated:ActivatedRoute) { }



  form = {
    
    typeCritereLibelle: '',
    typeCritereDescription: '',
    acceptTerms: false,
  };
  onSubmit(): void {
    this.typecritereService.createtypeCritere(this.tc).subscribe(
      ()=>  (this.router.navigate(['/home/typecritereList']))
    )
  }
  onReset(form: NgForm): void {
    form.reset();
  }



  ngOnInit(): void {
    
    
  }


  
 
    return(){
      this.router.navigate(['/home/typecritereList']);
    }



}
