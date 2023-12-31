import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputModule } from './input/input.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
