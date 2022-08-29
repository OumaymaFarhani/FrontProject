import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeCritere } from 'src/app/models/type-critere';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypecritereService {
  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;

  getAlltypeCritere(){
    return this.http.get(this.baseUrl+"/typeCritere/affichertypeCritere");
  }
  getOnetypeCritere(id: number){
    return this.http.get<TypeCritere>(this.baseUrl+"/typeCritere/affichertypeCritere/" +id);
  }

  createtypeCritere(typecritere:TypeCritere){
    return this.http.post(this.baseUrl+ "/typeCritere/ajoutertypeCritere",typecritere);
  }

  updatetypeCritere(typecritere:TypeCritere){
    return this.http.put(this.baseUrl+"/typeCritere/modifiertypeCritere",typecritere);
  }
  
  deletetypeCritere(id: number){
    return this.http.delete(this.baseUrl+"/typeCritere/supprimertypeCritere/" +id);
  }
}
