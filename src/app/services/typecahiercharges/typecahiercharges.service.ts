import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Typecahiercharges } from 'src/app/models/typecahiercharges';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypecahierchargesService {
  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;

  getAllTypeCahierCharge(){
    return this.http.get(this.baseUrl+"/typeCahierCharges/afficher");
  }
  getOneTypeCahierCharge(id: number){
    return this.http.get<Typecahiercharges>(this.baseUrl+"/typeCahierCharges/afficherOne/" +id);
  }

  createTypeCahierCharge(typecahiercharge:Typecahiercharges){
    return this.http.post(this.baseUrl+ "/typeCahierCharges/ajouter",typecahiercharge);
  }

  
  updateTypeCahierCharge(typecahiercharge:Typecahiercharges){
    return this.http.put(this.baseUrl+"/typeCahierCharges/modifier",typecahiercharge);
  }
  
  deleteTypeCahierCharge(id: number){
    return this.http.delete(this.baseUrl+"/typeCahierCharges/supprimer/" +id);
  }
}
