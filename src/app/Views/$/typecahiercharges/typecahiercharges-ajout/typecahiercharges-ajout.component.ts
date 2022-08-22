import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Typecahiercharges } from 'src/app/models/typecahiercharges';
import { TypecahierchargesService } from 'src/app/services/typecahiercharges/typecahiercharges.service';

@Component({
  selector: 'app-typecahiercharges-ajout',
  templateUrl: './typecahiercharges-ajout.component.html',
  styleUrls: ['./typecahiercharges-ajout.component.css']
})
export class TypecahierchargesAjoutComponent implements OnInit {


  typecahiercharge= new Typecahiercharges();
  
  constructor(private typecahierchargeService:TypecahierchargesService,private router: Router, private activated:ActivatedRoute) { }

  form = {
  
    typeCahierChargesLibelle: '',
    typeCahierDesChargesDescription: '',
      typeCahierDesChargesCode:'',
      ordre:'',
      acceptTerms: false,
  };

  onSubmit(): void {
    this.typecahierchargeService.createTypeCahierCharge(this.typecahiercharge).subscribe(
      ()=>  (this.router.navigate(['/home/typecahierchargeList']))
    )
  }
  onReset(form: NgForm): void {
    form.reset();
  }
  ngOnInit(): void {
   

}


}
