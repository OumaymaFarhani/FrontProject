import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CahierchargesAjoutComponent } from './Views/$/cahierdescharges/cahiercharges-ajout/cahiercharges-ajout.component';
import { CahierchargesEditComponent } from './Views/$/cahierdescharges/cahiercharges-edit/cahiercharges-edit.component';
import { CahierchargesListComponent } from './Views/$/cahierdescharges/cahiercharges-list/cahiercharges-list.component';
import { CahierchargesViewOneComponent } from './Views/$/cahierdescharges/cahiercharges-view-one/cahiercharges-view-one.component';
import { HomePageComponent } from './Views/home-page/home-page.component';
import { CategoriesprojetAjoutComponent } from './Views/Parametrages/categoriesprojet/categoriesprojet-ajout/categoriesprojet-ajout.component';
import { CategoriesprojetEditComponent } from './Views/Parametrages/categoriesprojet/categoriesprojet-edit/categoriesprojet-edit.component';
import { CategoriesprojetListComponent } from './Views/Parametrages/categoriesprojet/categoriesprojet-list/categoriesprojet-list.component';
import { CategoriesprojetViewOneComponent } from './Views/Parametrages/categoriesprojet/categoriesprojet-view-one/categoriesprojet-view-one.component';
import { NatureCritereviewOneComponent } from './Views/Parametrages/nature-critere/nature-critereview-one/nature-critereview-one.component';
import { NaturecritereAjoutComponent } from './Views/Parametrages/nature-critere/naturecritere-ajout/naturecritere-ajout.component';
import { NaturecritereEditComponent } from './Views/Parametrages/nature-critere/naturecritere-edit/naturecritere-edit.component';
import { NaturecritereListComponent } from './Views/Parametrages/nature-critere/naturecritere-list/naturecritere-list.component';

const routes: Routes = [
  {
    path:"",
    component: HomePageComponent
  },
  {
    path:"home",
    component: HomePageComponent
  , children:[
  {
    path:"naturecritereList",
    component: NaturecritereListComponent
  },
  {
    path:"ajouterNatureCritere",
    component: NaturecritereAjoutComponent
  },
  {
    path:"NatureCritere/:id",
    component: NatureCritereviewOneComponent
  },
  {
    path:"modifierNatureCritere/:id",
    component: NaturecritereEditComponent
  },
  {
    path:"categoriesprojetList",
    component: CategoriesprojetListComponent
  },
  {
    path:"ajouterCategoriesProjet",
    component: CategoriesprojetAjoutComponent
  },
  {
    path:"modifierCategoriesProjet/:id",
    component: CategoriesprojetEditComponent
  },
  
  {
    path:"CategoriesProjet/:id",
    component: CategoriesprojetViewOneComponent
  },
  {
    path:"CahiersdeChargeList",
    component: CahierchargesListComponent
  },
  {
    path:"ajouterCahiersdeCharge",
    component: CahierchargesAjoutComponent
  },
  {
    path:"modifierCahiersdeCharge/:id",
    component: CahierchargesEditComponent
  },
  
  {
    path:"CahiersdeCharge/:id",
    component:  CahierchargesViewOneComponent
  }

]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
