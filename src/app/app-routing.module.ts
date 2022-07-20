import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Views/home-page/home-page.component';
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
  }
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
