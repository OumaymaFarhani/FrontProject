import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CahierchargestypeAjoutComponent } from './Views/$/cahierchargestype/cahierchargestype-ajout/cahierchargestype-ajout.component';
import { CahierchargestypeEditComponent } from './Views/$/cahierchargestype/cahierchargestype-edit/cahierchargestype-edit.component';
import { CahierchargestypeListComponent } from './Views/$/cahierchargestype/cahierchargestype-list/cahierchargestype-list.component';
import { CahierchargestypeViewOneComponent } from './Views/$/cahierchargestype/cahierchargestype-view-one/cahierchargestype-view-one.component';
import { CahierclauseAjoutComponent } from './Views/$/cahierclause/cahierclause-ajout/cahierclause-ajout.component';
import { CahierclauseEditComponent } from './Views/$/cahierclause/cahierclause-edit/cahierclause-edit.component';
import { CahierclauseFinanEditComponent } from './Views/$/cahierclause/cahierclause-finan-edit/cahierclause-finan-edit.component';
import { CahierclauseViewOneComponent } from './Views/$/cahierclause/cahierclause-view-one/cahierclause-view-one.component';
import { CahierchargesAjoutComponent } from './Views/$/cahierdescharges/cahiercharges-ajout/cahiercharges-ajout.component';
import { CahierchargesEditComponent } from './Views/$/cahierdescharges/cahiercharges-edit/cahiercharges-edit.component';
import { CahierchargesListComponent } from './Views/$/cahierdescharges/cahiercharges-list/cahiercharges-list.component';
import { CahierchargesViewOneComponent } from './Views/$/cahierdescharges/cahiercharges-view-one/cahiercharges-view-one.component';
import { CriteresAjoutComponent } from './Views/$/cariteres/criteres-ajout/criteres-ajout.component';
import { CriteresFinanciereListComponent } from './Views/$/cariteres/criteres-financiere-list/criteres-financiere-list.component';
import { CriteresListComponent } from './Views/$/cariteres/criteres-list/criteres-list.component';
import { CriteresAjouterComponent } from './Views/$/criteres/criteres-ajouter/criteres-ajouter.component';
import { CriteresEditComponent } from './Views/$/criteres/criteres-edit/criteres-edit.component';
import { CriteresViewOneComponent } from './Views/$/criteres/criteres-view-one/criteres-view-one.component';
import { ListCriteresComponent } from './Views/$/criteres/list-criteres/list-criteres.component';
import { IntervallesAjoutComponent } from './Views/$/intervalles/intervalles-ajout/intervalles-ajout.component';
import { IntervallesEditComponent } from './Views/$/intervalles/intervalles-edit/intervalles-edit.component';
import { IntervallesListComponent } from './Views/$/intervalles/intervalles-list/intervalles-list.component';
import { IntervallesViewOneComponent } from './Views/$/intervalles/intervalles-view-one/intervalles-view-one.component';
import { IntervallestypeAjoutComponent } from './Views/$/intervallestype/intervallestype-ajout/intervallestype-ajout.component';
import { IntervallestypeEditComponent } from './Views/$/intervallestype/intervallestype-edit/intervallestype-edit.component';
import { IntervallestypeListComponent } from './Views/$/intervallestype/intervallestype-list/intervallestype-list.component';
import { IntervallestypeViewOneComponent } from './Views/$/intervallestype/intervallestype-view-one/intervallestype-view-one.component';
import { TypecahierchargesAjoutComponent } from './Views/$/typecahiercharges/typecahiercharges-ajout/typecahiercharges-ajout.component';
import { TypecahierchargesEditComponent } from './Views/$/typecahiercharges/typecahiercharges-edit/typecahiercharges-edit.component';
import { TypecahierchargesListComponent } from './Views/$/typecahiercharges/typecahiercharges-list/typecahiercharges-list.component';
import { TypecahierchargesViewOneComponent } from './Views/$/typecahiercharges/typecahiercharges-view-one/typecahiercharges-view-one.component';
import { HomePageComponent } from './Views/home-page/home-page.component';
import { CategoriesprojetAjoutComponent } from './Views/Parametrages/categoriesprojet/categoriesprojet-ajout/categoriesprojet-ajout.component';
import { CategoriesprojetEditComponent } from './Views/Parametrages/categoriesprojet/categoriesprojet-edit/categoriesprojet-edit.component';
import { CategoriesprojetListComponent } from './Views/Parametrages/categoriesprojet/categoriesprojet-list/categoriesprojet-list.component';
import { CategoriesprojetViewOneComponent } from './Views/Parametrages/categoriesprojet/categoriesprojet-view-one/categoriesprojet-view-one.component';
import { NatureCritereviewOneComponent } from './Views/Parametrages/nature-critere/nature-critereview-one/nature-critereview-one.component';
import { NaturecritereAjoutComponent } from './Views/Parametrages/nature-critere/naturecritere-ajout/naturecritere-ajout.component';
import { NaturecritereEditComponent } from './Views/Parametrages/nature-critere/naturecritere-edit/naturecritere-edit.component';
import { NaturecritereListComponent } from './Views/Parametrages/nature-critere/naturecritere-list/naturecritere-list.component';
import { TypecritereAjoutComponent } from './Views/Parametrages/Typecritere/typecritere-ajout/typecritere-ajout.component';
import { TypecritereEditComponent } from './Views/Parametrages/Typecritere/typecritere-edit/typecritere-edit.component';
import { TypecritereListComponent } from './Views/Parametrages/Typecritere/typecritere-list/typecritere-list.component';
import { TypecritereViewOneComponent } from './Views/Parametrages/Typecritere/typecritere-view-one/typecritere-view-one.component';

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
    path:"ajouterCritere",
    component: CriteresAjoutComponent
  },
  {
    path:"CritereList",
    component:CriteresListComponent

  },
  {
    path:"CritereFinanciereList",
    component:CriteresFinanciereListComponent

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
    path:"CahiersdeChargeList/:id",
    component:  CahierchargesViewOneComponent
    ,
 
  },
  { path:"ajouterClause/:id",
  component : CahierclauseAjoutComponent},
  { path:"modifierClause/:id",
  component : CahierclauseEditComponent},
  { path:"modifierClauseFinanciere/:id",
  component : CahierclauseFinanEditComponent},
 
  {
    path:"intervallesTypeList",
    component: IntervallestypeListComponent
   
  },
  {
    path:"intervallesList",
    component: IntervallesListComponent
   
  },
  {
    path:"ajouterintervallesTypeList",
    component: IntervallestypeAjoutComponent
  },
  {
    path:"modifierintervallesTypeList/:id",
    component: IntervallestypeEditComponent
  },
  {
    path:"intervallesTypeList/:id",
    component:  IntervallestypeViewOneComponent
  },
  {
    path:"ajouterintervallesList",
    component: IntervallesAjoutComponent
  },
  {
    path:"modifierintervallesList/:id",
    component: IntervallesEditComponent
  },
  {
    path:"intervallesList/:id",
    component:  IntervallesViewOneComponent
  },
  {
    path:"typecahierchargeList",
    component:  TypecahierchargesListComponent
  },
  {
    path:"ajoutertypecahierchargeList",
    component:  TypecahierchargesAjoutComponent
  },
  {
    path:"modifiertypecahierchargeList/:id",
    component:  TypecahierchargesEditComponent
  },
  {
    path:"typecahierchargeList/:id",
    component:  TypecahierchargesViewOneComponent
  },
  {
    path:"modifiercahierchargeTypeList/:id",
    component:  CahierchargestypeEditComponent
  },
  {
    path:"cahierchargeTypeList",
    component:  CahierchargestypeListComponent
  },
  {
    path:"cahierchargeTypeList/:id",
    component:  CahierchargestypeViewOneComponent
  },
  {
    path:"cahierchargeTypeListAjout",
    component:  CahierchargestypeAjoutComponent
  },
  {
    path:"critere",
    component: ListCriteresComponent
  },
  {
    path:"critere/:id",
    component: CriteresViewOneComponent
  },
  {
    path:"ajoutercriteres",
    component: CriteresAjouterComponent
  },
  {
    path:"modifiercritere/:id",
    component: CriteresEditComponent
  },
  {
    path:"typecritereList",
    component: TypecritereListComponent
  },
  {
    path:"typecritereajout",
    component: TypecritereAjoutComponent
  },
  {
    path:"typecritere/:id",
    component:  TypecritereViewOneComponent
  },
  {
    path:"modifiertypecritere/:id",
    component:  TypecritereEditComponent
  }

]},

{ path: '**',
 component: HomePageComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
