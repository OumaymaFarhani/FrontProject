import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cahiercharges } from 'src/app/models/cahiercharges';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CahierchargesService {

  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;


  createcahiercharges(cahiercharges:Cahiercharges,i:any){
    return this.http.post(this.baseUrl+ "/cahiercharges/ajouterrcahiercharges/"+i,cahiercharges);
  }
  getAllcahiercharges(){
    return this.http.get(this.baseUrl+"/cahiercharges/affichercahiercharges");
  }
  getOnecahiercharges(id: number){
    return this.http.get<Cahiercharges>(this.baseUrl+"/cahiercharges/affichercahiercharges/" +id);
  }

  updatecahiercharges(naturecritere:Cahiercharges){
    return this.http.put(this.baseUrl+"/cahiercharges/modifiercahiercharges",naturecritere);
  }
  
  deletecahiercharges(id: number){
    return this.http.delete(this.baseUrl+"/cahiercharges/supprimercahiercharges/" +id);
  }

}
