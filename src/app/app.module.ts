import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivreComponent } from './components/create_livre/livre.component';
import { ListeLivresComponent } from './components/liste-livres/liste-livres.component';
import { LivreService } from './services/livre-service.service';
import { materialize } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    ListeLivresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LivreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
