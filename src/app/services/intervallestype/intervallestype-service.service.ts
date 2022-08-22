import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Intervallestype } from 'src/app/models/intervallestype';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IntervallestypeServiceService {

  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;


  getAllIntervalleType(){
    return this.http.get(this.baseUrl+"/intervallestype/afficherintervallestype");
  }

  deleteIntervalleType(id: number){
    return this.http.delete(this.baseUrl+"/intervallestype/supprimerintervallestype/" +id);
  }

  
  createIntervalleType(intervallestype:Intervallestype){
    return this.http.post(this.baseUrl+ "/intervallestype/ajouterintervallestype",intervallestype);
  }

  updateIntervalleType(intervallestype:Intervallestype){
    return this.http.put(this.baseUrl+"/intervallestype/modifierintervallestype",intervallestype);
  }
  getOneIntervalleType(id: number){
    return this.http.get<Intervallestype>(this.baseUrl+"/intervallestype/afficherintervallestype/" +id);
  }

 
}
