import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Criterescahierclausesfinancierestechniques } from 'src/app/models/criterescahierclausesfinancierestechniques';
import { Criterescahierclausesfinancierestechniquestype } from 'src/app/models/criterescahierclausesfinancierestechniquestype';
import { Intervalles } from 'src/app/models/intervalles';
import { Operateurs } from 'src/app/models/operateurs';
import { CriterescahierclausesfinancierestechniquesService } from 'src/app/services/criterescahierclausesfinancierestechniques/criterescahierclausesfinancierestechniques.service';
import { IntervallesServiceService } from 'src/app/services/intervalles/intervalles-service.service';
import { OperateursService } from 'src/app/services/operateurs/operateurs.service';

@Component({
  selector: 'app-intervalles-edit',
  templateUrl: './intervalles-edit.component.html',
  styleUrls: ['./intervalles-edit.component.css']
})
export class IntervallesEditComponent implements OnInit {

  fff :Operateurs[];
  fun:Operateurs;
  fff1 :Criterescahierclausesfinancierestechniques[];
  fun1:Criterescahierclausesfinancierestechniques;

  operateurs1=new Operateurs();
  operateurs2=new Operateurs();
  critere=new Criterescahierclausesfinancierestechniques();
 
  intervalles1=new Intervalles();
  form = {
  
    intervallesInferieur: '',
    intervallesSuperieur: '',
    intervallesBareme:'',
    operateursByOperateursSuperieurId: '',
    operateursByOpeOperateursId:'',
    criterescahierclausesfinancierestechniques:'',
    acceptTerms: false,
};
  constructor(private router: Router, private activated:ActivatedRoute,private intervalles:IntervallesServiceService,private criterescahierclausesfinancierestechniquesService:CriterescahierclausesfinancierestechniquesService,private operateurService:OperateursService) { }

  ngOnInit(): void {
    this.intervalles1.operateursByOperateursSuperieurId=this.operateurs2;

    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        this.intervalles.getOneIntervalle(id).subscribe(
          d=>{
            this.intervalles1=d;
          //  this.intervalles1.operateursByOperateursSuperieurId=d.operateursByOperateursSuperieurId
            console.log( this.intervalles1.operateursByOperateursSuperieurId) 
          
            this.intervalles1.operateursByOpeOperateursId=d.operateursByOpeOperateursId
            console.log(this.intervalles1.operateursByOpeOperateursId)
            }
        )  
      }
    );

    this.operateurService.getAllOperateurs().subscribe((response:any)=>{
      console.log(response);
      this.fff=response
      });
  this.criterescahierclausesfinancierestechniquesService.getAllCriterescahierclausesfinancierestechniques().subscribe((response:any)=>{
    console.log(response);
    this.fff1=response
});
 }

  



onSubmit(): void {
  this.intervalles1.operateursByOpeOperateursId=this.operateurs1;
  console.log(this.intervalles1.operateursByOpeOperateursId)
  this.intervalles1.operateursByOperateursSuperieurId=this.operateurs2;
  this.intervalles1.criterescahierclausesfinancierestechniques=this.critere;
 
  this.intervalles.createIntervalle(this.intervalles1).subscribe(
    ()=>  (this.router.navigate(['/home/intervallesList']))
  )
}


}
