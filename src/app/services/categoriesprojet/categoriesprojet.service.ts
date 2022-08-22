import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoriesprojet } from 'src/app/models/categoriesprojet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesprojetService {

  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;
  


  createcategoriesProjet(categoriesprojet:Categoriesprojet){
    return this.http.post(this.baseUrl+ "/categoriesprojet/ajoutercategoriesprojet",categoriesprojet);
  }
  getAllCategoriesProjet(){
    return this.http.get(this.baseUrl+"/categoriesprojet/affichercategoriesprojet");
  }
  getOneCategoriesProjet(id: number){
    return this.http.get<Categoriesprojet>(this.baseUrl+"/categoriesprojet/affichercategoriesprojet/" +id);
  }

  updateCategoriesProjet(naturecritere:Categoriesprojet){
    return this.http.put(this.baseUrl+"/categoriesprojet/modifiercategoriesprojet",naturecritere);
  }
  
  deleteCategoriesProjet(id: number){
    return this.http.delete(this.baseUrl+"/categoriesprojet/supprimercategoriesprojet/" +id);
  }
}
