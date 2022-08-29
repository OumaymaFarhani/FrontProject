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

  
  createCritere(typecritere:Criteres){
    return this.http.post(this.baseUrl+ "/critere/ajouterCritere",typecritere);
  }

  updateCritere(typecritere:Criteres){
    return this.http.put(this.baseUrl+"/critere/modifierCritere",typecritere);
  }
  
  deleteCritere(id: number){
    return this.http.delete(this.baseUrl+"/critere/supprimerCritere/" +id);
  }
}
