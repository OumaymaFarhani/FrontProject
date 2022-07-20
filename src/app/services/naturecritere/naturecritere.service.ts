import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NatureCritere } from '../../models/nature-critere';

@Injectable({
  providedIn: 'root'
})
export class NaturecritereService {

  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;



  createNatureCritere(naturecritere:NatureCritere){
    return this.http.post(this.baseUrl+ "/natureCriter/ajouter",naturecritere);
  }
  getAllNatureCritere(){
    return this.http.get(this.baseUrl+"/natureCriter/afficher");
  }
  getOneNatureCritere(id: number){
    return this.http.get<NatureCritere>(this.baseUrl+"/natureCriter/afficherOne/" +id);
  }

  updateNatureCritere(naturecritere:NatureCritere){
    return this.http.put(this.baseUrl+"/natureCriter/modifiernaturecritere",naturecritere);
  }
  
  deleteNatureCritere(id: number){
    return this.http.delete(this.baseUrl+"/natureCriter/supprimer/" +id);
  }
}
