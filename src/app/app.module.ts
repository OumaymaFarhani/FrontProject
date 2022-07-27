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
    CahierchargesViewOneComponent
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
