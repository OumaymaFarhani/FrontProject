import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Intervalles } from 'src/app/models/intervalles';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IntervallesServiceService {
  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;

  getAllIntervalle(){
    return this.http.get(this.baseUrl+"/intervalles/afficherintervalles");
  }

  deleteIntervalle(id: number){
    return this.http.delete(this.baseUrl+"/intervalles/supprimerintervalles/" +id);
  }

  
  createIntervalle(intervalles:Intervalles){
    return this.http.post(this.baseUrl+ "/intervalles/ajouterintervalles",intervalles);
  }
  getOneIntervalle(id: number){
    return this.http.get<Intervalles>(this.baseUrl+"/intervalles/afficherintervalles/" +id);
  }
}
