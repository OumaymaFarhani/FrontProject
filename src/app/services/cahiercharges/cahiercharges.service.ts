import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cahiercharges } from 'src/app/models/cahiercharges';
import { Cahierclausemodel } from 'src/app/models/cahierclausemodel';
import { Typecahiercharges } from 'src/app/models/typecahiercharges';
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
  
  createcahiercharges1(cahiercharges:Cahiercharges){
    return this.http.post(this.baseUrl+ "/cahiercharges/ajoutercahiercharges",cahiercharges);
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
  ajoutercahierchargesclauseA(id1: number,id2: number,id3: number){
    return this.http.delete(this.baseUrl+"/cahiercharges/ajouterclause1/" +id1+"/"+id2+"/"+id3);
  }

  ajoutercahierchargesclauseF(id1: number,id2: number,id3: number){
    return this.http.delete(this.baseUrl+"/cahiercharges/ajouterclause2/" +id1+"/"+id2+"/"+id3);
  }


  ajoutercahierchargesclause(cahierclause:Cahierclausemodel){
    return this.http.post(this.baseUrl+"/cahiercharges/ajouterclause",cahierclause);
  }


  
  
  afficherclauserestant(id:number){
    return this.http.get<Typecahiercharges>(this.baseUrl+"/cahiercharges/affichercahierchargesclause/" +id);
  }
  deleteclause(id: number){
    return this.http.delete(this.baseUrl+"/cahiercharges/supprimerclauses/" +id);
  }

  updateclause(c:Cahierclausemodel){
    return this.http.put(this.baseUrl+"/cahiercharges/modifierclause",c);
  }

  genererClause(id:number){
    return this.http.get(this.baseUrl+"/cahiercharges/vvvv/"+id);
  }
}
