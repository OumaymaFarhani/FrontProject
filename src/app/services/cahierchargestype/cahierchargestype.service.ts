import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cahierchargestype } from 'src/app/models/cahierchargestype';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CahierchargestypeService {

  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;


  createcahierchargestype(cahierchargestype:Cahierchargestype){
    return this.http.post(this.baseUrl+ "/cahierchargestype/ajouter",cahierchargestype);
  }
  getAllcahierchargestype(){
    return this.http.get(this.baseUrl+"/cahierchargestype/afficher");
  }
  getOnecahiercharges(id: number){
    return this.http.get<Cahierchargestype>(this.baseUrl+"/cahierchargestype/afficher/" +id);
  }

  updatecahiercharges(cahierchargestype:Cahierchargestype){
    return this.http.put(this.baseUrl+"/cahierchargestype/modifier",cahierchargestype);
  }
  
  deletecahiercharges(id: number){
    return this.http.delete(this.baseUrl+"/cahierchargestype/supprimer/" +id);
  }
}
