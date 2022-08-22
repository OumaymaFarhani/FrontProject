import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Criterescahierclausesfinancierestechniquestype } from 'src/app/models/criterescahierclausesfinancierestechniquestype';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CriterescahierclausesfinancierestechniquestypeService {
  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;

  getAllCriterescahierclausesfinancierestechniquestype(){
    return this.http.get(this.baseUrl+"/criterescahierclausesfinancierestechniquestype/afficherCriteretype");
  }
  getOneCriterescahierclausesfinancierestechniquestype(id: number){
    return this.http.get<Criterescahierclausesfinancierestechniquestype>(this.baseUrl+"/criterescahierclausesfinancierestechniquestype/afficherOne/" +id);
  }
}
