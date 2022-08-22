import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Criterescahierclausesfinancierestechniques } from 'src/app/models/criterescahierclausesfinancierestechniques';
import { Intervalles } from 'src/app/models/intervalles';
import { Operateurs } from 'src/app/models/operateurs';
import { CriterescahierclausesfinancierestechniquesService } from 'src/app/services/criterescahierclausesfinancierestechniques/criterescahierclausesfinancierestechniques.service';
import { IntervallesServiceService } from 'src/app/services/intervalles/intervalles-service.service';
import { OperateursService } from 'src/app/services/operateurs/operateurs.service';

@Component({
  selector: 'app-intervalles-ajout',
  templateUrl: './intervalles-ajout.component.html',
  styleUrls: ['./intervalles-ajout.component.css']
})
export class IntervallesAjoutComponent implements OnInit {

  intervalles1=new Intervalles();
  fff :Operateurs[];
  fun:Operateurs;
  fff1 :Criterescahierclausesfinancierestechniques[];
  fun1:Criterescahierclausesfinancierestechniques;
  operateurs1=new Operateurs();
  operateurs2=new Operateurs();
  critere=new Criterescahierclausesfinancierestechniques();
  constructor(private intervalles:IntervallesServiceService,private router: Router, private activated:ActivatedRoute,private criterescahierclausesfinancierestechniquesService:CriterescahierclausesfinancierestechniquesService,private operateurService:OperateursService) { }

  ngOnInit(): void {
    this.operateurService.getAllOperateurs().subscribe((response:any)=>{
      console.log(response);
      this.fff=response
  });
  this.criterescahierclausesfinancierestechniquesService.getAllCriterescahierclausesfinancierestechniques().subscribe((response:any)=>{
    console.log(response);
    this.fff1=response
});
  }
  form = {
  
    intervallesInferieur: '',
    intervallesSuperieur: '',
    intervallesBareme:'',
    operateursByOperateursSuperieurId: '',
    operateursByOpeOperateursId:'',
    criterescahierclausesfinancierestechniques:'',
    acceptTerms: false,
};



onSubmit(): void {
  this.intervalles1.operateursByOpeOperateursId=this.operateurs1;
  this.intervalles1.operateursByOperateursSuperieurId=this.operateurs2;
  this.intervalles1.criterescahierclausesfinancierestechniques=this.critere;

  this.intervalles.createIntervalle(this.intervalles1).subscribe(
    ()=>  (this.router.navigate(['/home/intervallesList']))
  )
}
  
  onReset(form: NgForm): void {
    form.reset();
  }
 

}
