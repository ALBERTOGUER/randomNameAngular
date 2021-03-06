import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { HttpClientModule } from '@angular/common/http';
import { SpacebarpressDirective } from './directive/spacebarpress.directive';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SpacebarpressDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SweetAlert2Module
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
