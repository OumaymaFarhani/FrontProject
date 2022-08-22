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
  selector: 'app-intervallestype-edit',
  templateUrl: './intervallestype-edit.component.html',
  styleUrls: ['./intervallestype-edit.component.css']
})
export class IntervallestypeEditComponent implements OnInit {
  fff :Operateurs[];
  fff2 :Operateurs[];
  fun:Operateurs;
  fun2:Operateurs;
  fff1 :Criterescahierclausesfinancierestechniquestype[];
  fun1:Criterescahierclausesfinancierestechniquestype;

  operateurs1=new Operateurs();
  operateurs2=new Operateurs();
  critere=new Criterescahierclausesfinancierestechniquestype();
  intervallestype1=new Intervallestype();
  constructor(private router: Router, private activated:ActivatedRoute,private intervallestype:IntervallestypeServiceService,private criterescahierclausesfinancierestechniquestypeService:CriterescahierclausesfinancierestechniquestypeService,private operateurService:OperateursService) { }
  form = {
  
    intervallesInferieur: '',
    intervallesSuperieur: '',
    intervallesBareme:'',
 operateurstypeByOperateursSuperieurId: '',
 operateurstypeByOpeOperateursId:'',
 criterescahierclausesfinancierestechniquestype:'',
    acceptTerms: false,
};
  ngOnInit(): void {
    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        this.intervallestype.getOneIntervalleType(id).subscribe(
          d=>{
         
            this.intervallestype1=d;
          /*  this.intervallestype1.operateurstypeByOpeOperateursId=this.operateurs1;
            this.intervallestype1.operateurstypeByOperateursSuperieurId=this.operateurs2;
            this.intervallestype1.criterescahierclausesfinancierestechniquestype=this.critere;
      */
            console.log(this.intervallestype1)
            console.log("**************"+this.intervallestype1.operateurstypeByOpeOperateursId.operateursId)
            console.log("**************"+this.intervallestype1.operateurstypeByOperateursSuperieurId.operateursId)

            }
        )  
      }
    );
    this.operateurService.getAllOperateurs().subscribe((response:any)=>{
      console.log(response);
      this.fff=response
  });
  this.criterescahierclausesfinancierestechniquestypeService.getAllCriterescahierclausesfinancierestechniquestype().subscribe((response:any)=>{
    console.log(response);
    this.fff1=response
});
  }

  


onSubmit(): void {
//this.intervallestype1.operateurstypeByOpeOperateursId=this.

  this.intervallestype1.operateurstypeByOpeOperateursId=this.operateurs1;
  this.intervallestype1.operateurstypeByOperateursSuperieurId=this.operateurs2;
  //this.intervallestype1.criterescahierclausesfinancierestechniquestype=this.critere;

  this.intervallestype.updateIntervalleType(this.intervallestype1).subscribe(
    ()=>  (this.router.navigate(['/home/intervallesTypeList']))
  
    ,  
    error => console.log(error));  
   
  
}

}
