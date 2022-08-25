import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaturecritereListComponent } from './Views/Parametrages/nature-critere/naturecritere-list/naturecritere-list.component';
import { NaturecritereAjoutComponent } from './Views/Parametrages/nature-critere/naturecritere-ajout/naturecritere-ajout.component';
import { FormsModule } from '@angular/forms';
import { NaturecritereEditComponent } from './Views/Parametrages/nature-critere/naturecritere-edit/naturecritere-edit.component';
import { HomePageComponent } from './Views/home-page/home-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NatureCritereviewOneComponent } from './Views/Parametrages/nature-critere/nature-critereview-one/nature-critereview-one.component';
import { CategoriesprojetListComponent } from './Views/Parametrages/categoriesprojet/categoriesprojet-list/categoriesprojet-list.component';
import { CategoriesprojetAjoutComponent } from './Views/Parametrages/categoriesprojet/categoriesprojet-ajout/categoriesprojet-ajout.component';
import { CategoriesprojetEditComponent } from './Views/Parametrages/categoriesprojet/categoriesprojet-edit/categoriesprojet-edit.component';
import { CategoriesprojetViewOneComponent } from './Views/Parametrages/categoriesprojet/categoriesprojet-view-one/categoriesprojet-view-one.component';
import { CommonModule } from '@angular/common';
import { CahierchargesListComponent } from './Views/$/cahierdescharges/cahiercharges-list/cahiercharges-list.component';
import { CahierchargesAjoutComponent } from './Views/$/cahierdescharges/cahiercharges-ajout/cahiercharges-ajout.component';
import { CahierchargesEditComponent } from './Views/$/cahierdescharges/cahiercharges-edit/cahiercharges-edit.component';
import { CahierchargesViewOneComponent } from './Views/$/cahierdescharges/cahiercharges-view-one/cahiercharges-view-one.component';
import { CahierclauseAjoutComponent } from './Views/$/cahierclause/cahierclause-ajout/cahierclause-ajout.component';
import { IntervallestypeListComponent } from './Views/$/intervallestype/intervallestype-list/intervallestype-list.component';
import { IntervallesListComponent } from './Views/$/intervalles/intervalles-list/intervalles-list.component';
import { IntervallesAjoutComponent } from './Views/$/intervalles/intervalles-ajout/intervalles-ajout.component';
import { IntervallestypeAjoutComponent } from './Views/$/intervallestype/intervallestype-ajout/intervallestype-ajout.component';
import { IntervallestypeEditComponent } from './Views/$/intervallestype/intervallestype-edit/intervallestype-edit.component';
import { IntervallestypeViewOneComponent } from './Views/$/intervallestype/intervallestype-view-one/intervallestype-view-one.component';
import { IntervallesEditComponent } from './Views/$/intervalles/intervalles-edit/intervalles-edit.component';
import { IntervallesViewOneComponent } from './Views/$/intervalles/intervalles-view-one/intervalles-view-one.component';
import { TypecahierchargesListComponent } from './Views/$/typecahiercharges/typecahiercharges-list/typecahiercharges-list.component';
import { TypecahierchargesEditComponent } from './Views/$/typecahiercharges/typecahiercharges-edit/typecahiercharges-edit.component';
import { TypecahierchargesAjoutComponent } from './Views/$/typecahiercharges/typecahiercharges-ajout/typecahiercharges-ajout.component';
import { TypecahierchargesViewOneComponent } from './Views/$/typecahiercharges/typecahiercharges-view-one/typecahiercharges-view-one.component';
import { CahierchargestypeListComponent } from './Views/$/cahierchargestype/cahierchargestype-list/cahierchargestype-list.component';
import { CahierchargestypeEditComponent } from './Views/$/cahierchargestype/cahierchargestype-edit/cahierchargestype-edit.component';
import { CahierchargestypeAjoutComponent } from './Views/$/cahierchargestype/cahierchargestype-ajout/cahierchargestype-ajout.component';
import { CahierchargestypeViewOneComponent } from './Views/$/cahierchargestype/cahierchargestype-view-one/cahierchargestype-view-one.component';
import { CahierclauseViewOneComponent } from './Views/$/cahierclause/cahierclause-view-one/cahierclause-view-one.component';
import { CahierclauseEditComponent } from './Views/$/cahierclause/cahierclause-edit/cahierclause-edit.component';
import { CriteresListComponent } from './Views/$/cariteres/criteres-list/criteres-list.component';
import { CriteresAjoutComponent } from './Views/$/cariteres/criteres-ajout/criteres-ajout.component';
import { CahierclauseFinanEditComponent } from './Views/$/cahierclause/cahierclause-finan-edit/cahierclause-finan-edit.component';
import { CahierclauseFinanViewOneComponent } from './Views/$/cahierclause/cahierclause-finan-view-one/cahierclause-finan-view-one.component';
import { CriteresFinanciereListComponent } from './Views/$/cariteres/criteres-financiere-list/criteres-financiere-list.component';


export function Ts(http:HttpClient){
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
@NgModule({


  declarations: [
    AppComponent,
    NaturecritereListComponent,
    NaturecritereAjoutComponent,
    NaturecritereEditComponent,
    HomePageComponent,
    NatureCritereviewOneComponent,
    
    CategoriesprojetListComponent,
    CategoriesprojetAjoutComponent,
    CategoriesprojetEditComponent,
    CategoriesprojetViewOneComponent,
    CahierchargesListComponent,
    CahierchargesAjoutComponent,
    CahierchargesEditComponent,
    CahierchargesViewOneComponent,
    CahierclauseAjoutComponent,
    IntervallestypeListComponent,
    IntervallesListComponent,
    IntervallesAjoutComponent,
    IntervallestypeAjoutComponent,
    IntervallestypeEditComponent,
    IntervallestypeViewOneComponent,
    IntervallesViewOneComponent,
   
    IntervallesEditComponent,
        TypecahierchargesListComponent,
        TypecahierchargesEditComponent,
        TypecahierchargesAjoutComponent,
        TypecahierchargesViewOneComponent,
        CahierchargestypeListComponent,
        CahierchargestypeEditComponent,
        CahierchargestypeAjoutComponent,
        CahierchargestypeViewOneComponent,
        CahierclauseViewOneComponent,
        CahierclauseEditComponent,
        CriteresListComponent,
        CriteresAjoutComponent,
        CahierclauseFinanEditComponent,
        CahierclauseFinanViewOneComponent,
        CriteresFinanciereListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (Ts),
          deps: [HttpClient]
        } 
}),
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
