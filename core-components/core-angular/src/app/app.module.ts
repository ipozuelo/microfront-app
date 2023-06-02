import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebComponentsStencilModule } from 'src/libs/web-component-stencil.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WebComponentsStencilModule
  ],
  providers: [],
  exports:[WebComponentsStencilModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
