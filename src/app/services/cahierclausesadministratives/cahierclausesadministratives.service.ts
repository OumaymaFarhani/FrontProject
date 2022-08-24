import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cahierclausemodel } from 'src/app/models/cahierclausemodel';
import { Cahierclausesadministratives } from 'src/app/models/cahierclausesadministratives';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CahierclausesadministrativesService {

  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;

  getAllcahierclausesadministratives(id: number){
    return this.http.get<Cahierclausesadministratives>(this.baseUrl+"/cahierclausesadministratives/a/"+id);
  }

  getAllcahierclausesadministratives1(id: number){
    return this.http.get(this.baseUrl+"/cahierclausesadministratives/cc/"+id);
  }

  getONEClauseAdmin(id:number){
    return this.http.get<Cahierclausesadministratives>(this.baseUrl+"/cahierclausesadministratives/"+id);
  }


  getONEClause(id:number){
    return this.http.get<Cahierclausemodel>(this.baseUrl+"/cahierclausesadministratives/"+id);
  }
  deleteClauseAdmin(id: number){
    return this.http.delete(this.baseUrl+"/cahierclausesadministratives/supprimerclauseAdmin/" +id);
  }

  
  ajouterclauseadmin(c:Cahierclausesadministratives){
    return this.http.post(this.baseUrl+"/cahierclausesadministratives/ajouterclause",c);
  }

}
