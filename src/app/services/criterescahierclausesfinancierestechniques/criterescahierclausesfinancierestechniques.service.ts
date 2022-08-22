import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Criterescahierclausesfinancierestechniques } from 'src/app/models/criterescahierclausesfinancierestechniques';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CriterescahierclausesfinancierestechniquesService {
  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;

  getAllCriterescahierclausesfinancierestechniques(){
    return this.http.get(this.baseUrl+"/criterescahierclausesfinancierestechniques/afficherCritere");
  }
  getOneCriterescahierclausesfinancierestechniquestype(id: number){
    return this.http.get<Criterescahierclausesfinancierestechniques>(this.baseUrl+"/criterescahierclausesfinancierestechniques/afficherOne/" +id);
  }


 



  getAllCritereAdmin(id:number){
    return this.http.get(this.baseUrl+"/criterescahierclausesfinancierestechniques/affichercriteres/"+id);
  }

  createCritereFinanciere(cc:Criterescahierclausesfinancierestechniques){
    return this.http.post(this.baseUrl+"/criterescahierclausesfinancierestechniques/ajoutercriterescahierclausesfinancierestechniques",cc);
  }
}
