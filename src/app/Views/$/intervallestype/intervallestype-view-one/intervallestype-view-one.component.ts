import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Criterescahierclausesfinancierestechniquestype } from 'src/app/models/criterescahierclausesfinancierestechniquestype';
import { Intervallestype } from 'src/app/models/intervallestype';
import { Operateurs } from 'src/app/models/operateurs';
import { IntervallestypeServiceService } from 'src/app/services/intervallestype/intervallestype-service.service';

@Component({
  selector: 'app-intervallestype-view-one',
  templateUrl: './intervallestype-view-one.component.html',
  styleUrls: ['./intervallestype-view-one.component.css']
})
export class IntervallestypeViewOneComponent implements OnInit {
  intervallestype1=new Intervallestype();
  operateurs1:Operateurs;
  
  critere:Criterescahierclausesfinancierestechniquestype[];
 
  constructor(private router: Router, private activated:ActivatedRoute,private intervallestype:IntervallestypeServiceService) { }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        this.intervallestype.getOneIntervalleType(id).subscribe(
          d=>{
            this.intervallestype1=d;
            }
        )  
      }
    );
  }

}
