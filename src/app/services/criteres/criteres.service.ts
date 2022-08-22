import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Criteres } from 'src/app/models/criteres';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CriteresService {
  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;
  


  getAllCritere(){
    return this.http.get(this.baseUrl+"/critere/affichercriteres");
  }
  getOneCritere(id: number){
    return this.http.get<Criteres>(this.baseUrl+"/critere/affichercriteres/" +id);
  }
}
