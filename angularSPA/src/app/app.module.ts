import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { WebComponentsStencilModule } from 'src/libs/web-component-stencil.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //WebComponentsStencilModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
