import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operateurs } from 'src/app/models/operateurs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperateursService {
  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;

  getAllOperateurs(){
    return this.http.get(this.baseUrl+"/operateurs/afficherOperateurs");
  }
  getOneNatureCritere(id: number){
    return this.http.get<Operateurs>(this.baseUrl+"/operateurs/afficherOne/" +id);
  }

}
