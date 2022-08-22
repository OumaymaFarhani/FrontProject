import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cahierchargestype } from 'src/app/models/cahierchargestype';
import { Categoriesprojet } from 'src/app/models/categoriesprojet';
import { CahierchargestypeService } from 'src/app/services/cahierchargestype/cahierchargestype.service';

@Component({
  selector: 'app-cahierchargestype-view-one',
  templateUrl: './cahierchargestype-view-one.component.html',
  styleUrls: ['./cahierchargestype-view-one.component.css']
})
export class CahierchargestypeViewOneComponent implements OnInit {
  cahiertype1=new Cahierchargestype();
  categorie:Categoriesprojet;
 
  constructor(private router: Router, private activated:ActivatedRoute,private cahierchargetypeService:CahierchargestypeService) { }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        this.cahierchargetypeService.getOnecahiercharges(id).subscribe(
          d=>{
            this.cahiertype1=d;
            }
        )  
      }
    );
  }


}
