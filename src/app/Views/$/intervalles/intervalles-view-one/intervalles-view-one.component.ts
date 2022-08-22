import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Intervalles } from 'src/app/models/intervalles';
import { IntervallesServiceService } from 'src/app/services/intervalles/intervalles-service.service';

@Component({
  selector: 'app-intervalles-view-one',
  templateUrl: './intervalles-view-one.component.html',
  styleUrls: ['./intervalles-view-one.component.css']
})
export class IntervallesViewOneComponent implements OnInit {

  
  intervalles1=new Intervalles();
  constructor(private router: Router, private activated:ActivatedRoute,private intervalles:IntervallesServiceService) { }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        this.intervalles.getOneIntervalle(id).subscribe(
          d=>{
            this.intervalles1=d;
            }
        )  
      }
    );
  }

 




}
