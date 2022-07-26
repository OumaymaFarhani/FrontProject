import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cahierclausemodel } from 'src/app/models/cahierclausemodel';
import { Cahierclausesfinancierestechniques } from 'src/app/models/cahierclausesfinancierestechniques';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CahierclausesfinancierestechniquesService {

  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;

  getAllcahierclausesfinancierestechniques(id: number){
    return this.http.get<Cahierclausesfinancierestechniques>(this.baseUrl+"/cahierclausesfinancierestechniques/cahiercharge/"+id);
  }
  deleteClauseFinanc(id: number){
    return this.http.delete(this.baseUrl+"/cahierclausesfinancierestechniques/supprimerclausefinanciere/" +id);
  }

  getONEClause(id:number){
    return this.http.get<Cahierclausemodel>(this.baseUrl+"/cahierclausesfinancierestechniques/"+id);
  }
  
  ajouterclauseFinnanciere(c:Cahierclausesfinancierestechniques){
    return this.http.post(this.baseUrl+"/cahierclausesfinancierestechniques/ajouterclause",c);
  }
}

