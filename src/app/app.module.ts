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
    NatureCritereviewOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
