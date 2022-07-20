import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NatureCritere } from 'src/app/models/nature-critere';
import { NaturecritereService } from 'src/app/services/naturecritere/naturecritere.service';

@Component({
  selector: 'app-nature-critereview-one',
  templateUrl: './nature-critereview-one.component.html',
  styleUrls: ['./nature-critereview-one.component.css']
})
export class NatureCritereviewOneComponent implements OnInit {
  n=new NatureCritere();
  constructor(private naturecritereservice : NaturecritereService, private router: Router, private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        this.naturecritereservice.getOneNatureCritere(id).subscribe(
          d=>{
            this.n=d;
            }
        )  
      }
    );
  }


}
