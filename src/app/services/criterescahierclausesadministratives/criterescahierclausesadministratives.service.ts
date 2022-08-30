import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Criterescahierclausesadministratives } from 'src/app/models/criterescahierclausesadministratives';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CriterescahierclausesadministrativesService {

  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;
  


 
  getOneCritereAdmin(id:number){
    return this.http.get(this.baseUrl+"/critereadministartive/"+id);
  }

  getAllCritereAdmin(id:number){
    return this.http.get(this.baseUrl+"/critereadministartive/affichercriteres/"+id);
  }
  createCritereAdmin(c:Criterescahierclausesadministratives){
    return this.http.post(this.baseUrl+"/critereadministartive/ajoutercritereadministartive",c);
  }

  getOneCritere(id1: number,id2:number){
    return this.http.get<Criterescahierclausesadministratives>(this.baseUrl+"/critereadministartive/affichercriteresbyid/" +id1+"/"+id2);
  }
  updadteCritereAdmin(c:Criterescahierclausesadministratives){
    return this.http.put(this.baseUrl+"/critereadministartive/modifiercritereadministartive",c);
  }
}
