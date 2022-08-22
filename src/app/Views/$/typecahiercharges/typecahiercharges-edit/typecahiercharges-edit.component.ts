import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Typecahiercharges } from 'src/app/models/typecahiercharges';
import { TypecahierchargesService } from 'src/app/services/typecahiercharges/typecahiercharges.service';

@Component({
  selector: 'app-typecahiercharges-edit',
  templateUrl: './typecahiercharges-edit.component.html',
  styleUrls: ['./typecahiercharges-edit.component.css']
})
export class TypecahierchargesEditComponent implements OnInit {

  typecahiercharge= new Typecahiercharges();
  form = {
  
    typeCahierChargesLibelle: '',
    typeCahierDesChargesDescription: '',
      typeCahierDesChargesCode:'',
      ordre:'',
      acceptTerms: false,
  };
  constructor(private typecahierchargeService : TypecahierchargesService,private router: Router, private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        this.typecahierchargeService.getOneTypeCahierCharge(id).subscribe(
          d=>{
            this.typecahiercharge=d;
            }
        )  
      }
    );
  }
 
  onSubmit(): void {
    this.typecahierchargeService.updateTypeCahierCharge(this.typecahiercharge).subscribe(
      ()=>  (this.router.navigate(['/home/typecahierchargeList']))
    )
  }
 


}
