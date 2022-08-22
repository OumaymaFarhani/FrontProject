import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Typecahiercharges } from 'src/app/models/typecahiercharges';
import { TypecahierchargesService } from 'src/app/services/typecahiercharges/typecahiercharges.service';

@Component({
  selector: 'app-typecahiercharges-view-one',
  templateUrl: './typecahiercharges-view-one.component.html',
  styleUrls: ['./typecahiercharges-view-one.component.css']
})
export class TypecahierchargesViewOneComponent implements OnInit {
  type= new Typecahiercharges();

  constructor(private typecahierchargeService : TypecahierchargesService,private router: Router, private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        this.typecahierchargeService.getOneTypeCahierCharge(id).subscribe(
          d=>{
            this.type=d;
            }
        )  
      }
    );
  }

}
