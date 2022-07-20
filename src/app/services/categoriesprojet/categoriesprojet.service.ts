import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriesProjet } from 'src/app/models/categories-projet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesprojetService {

  constructor(private http:HttpClient) { }
  baseUrl= environment.API_BASE_URL;
  


  createcategoriesProjet(categoriesprojet:CategoriesProjet){
    return this.http.post(this.baseUrl+ "/categoriesprojet/ajoutercategoriesprojet",categoriesprojet);
  }
  getAllCategoriesProjet(){
    return this.http.get(this.baseUrl+"/categoriesprojet/affichercategoriesprojet");
  }
  getOneCategoriesProjet(id: number){
    return this.http.get<CategoriesProjet>(this.baseUrl+"/categoriesprojet/affichercategoriesprojet/" +id);
  }

  updateCategoriesProjet(naturecritere:CategoriesProjet){
    return this.http.put(this.baseUrl+"/categoriesprojet/modifiercategoriesprojet",naturecritere);
  }
  
  deleteCategoriesProjet(id: number){
    return this.http.delete(this.baseUrl+"/categoriesprojet/supprimercategoriesprojet/" +id);
  }
}
