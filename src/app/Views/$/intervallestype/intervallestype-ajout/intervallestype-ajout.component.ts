import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Criterescahierclausesfinancierestechniquestype } from 'src/app/models/criterescahierclausesfinancierestechniquestype';
import { Intervallestype } from 'src/app/models/intervallestype';
import { Operateurs } from 'src/app/models/operateurs';
import { CriterescahierclausesfinancierestechniquestypeService } from 'src/app/services/criterescahierclausesfinancierestechniquestype/criterescahierclausesfinancierestechniquestype.service';
import { IntervallestypeServiceService } from 'src/app/services/intervallestype/intervallestype-service.service';
import { OperateursService } from 'src/app/services/operateurs/operateurs.service';

@Component({
  selector: 'app-intervallestype-ajout',
  templateUrl: './intervallestype-ajout.component.html',
  styleUrls: ['./intervallestype-ajout.component.css']
})
export class IntervallestypeAjoutComponent implements OnInit {
  intervallestype1=new Intervallestype();
  fff :Operateurs[];
  fun:Operateurs;
  fff1 :Criterescahierclausesfinancierestechniquestype[];
  fun1:Criterescahierclausesfinancierestechniquestype;
  operateurs1=new Operateurs();
  operateurs2=new Operateurs();
  critere=new Criterescahierclausesfinancierestechniquestype();
  constructor(private intervallestype:IntervallestypeServiceService,private criterescahierclausesfinancierestechniquestypeService:CriterescahierclausesfinancierestechniquestypeService,private operateurService:OperateursService,private router: Router, private activated:ActivatedRoute) { }

  ngOnInit(): void {

    this.operateurService.getAllOperateurs().subscribe((response:any)=>{
      console.log(response);
      this.fff=response
  });
  this.criterescahierclausesfinancierestechniquestypeService.getAllCriterescahierclausesfinancierestechniquestype().subscribe((response:any)=>{
    console.log(response);
    this.fff1=response
});

//console.log(this.fun1)
  }
  form = {
  
    intervallesInferieur: '',
    intervallesSuperieur: '',
    intervallesBareme:'',
 operateurstypeByOperateursSuperieurId: '',
 operateurstypeByOpeOperateursId:'',
 criterescahierclausesfinancierestechniquestype:'',
    acceptTerms: false,
};



onSubmit(): void {
  this.intervallestype1.operateurstypeByOpeOperateursId=this.operateurs1;
  this.intervallestype1.operateurstypeByOperateursSuperieurId=this.operateurs2;
  this.intervallestype1.criterescahierclausesfinancierestechniquestype=this.critere;
  this.intervallestype.createIntervalleType(this.intervallestype1).subscribe(
    ()=>  (this.router.navigate(['/home/intervallesTypeList']))
  )
  console.log(this.intervallestype1.operateurstypeByOpeOperateursId)
  console.log(this.critere)
}
  
  onReset(form: NgForm): void {
    form.reset();
  }
 


}
