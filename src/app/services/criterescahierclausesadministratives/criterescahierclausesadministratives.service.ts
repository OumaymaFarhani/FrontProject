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
  


 


  getAllCritereAdmin(id:number){
    return this.http.get(this.baseUrl+"/critereadministartive/affichercriteres/"+id);
  }
  createCritereAdmin(c:Criterescahierclausesadministratives){
    return this.http.post(this.baseUrl+"/critereadministartive/ajoutercritereadministartive",c);
  }
}
