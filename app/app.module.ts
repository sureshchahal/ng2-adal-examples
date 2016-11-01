import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
<<<<<<< HEAD
import {AdalService} from 'ng2-adal/services';
import { RouterModule }   from '@angular/router';
import {WelcomeComponent} from './welcome.component';

@NgModule({
  imports:      [ BrowserModule,
  RouterModule.forRoot([
  {
    path: '',
    component: WelcomeComponent
  }
])],
  declarations:[AppComponent],
  bootstrap: [AppComponent],
  providers: [AdalService]
=======

@NgModule({
  imports:      [ BrowserModule ],
  declarations:[AppComponent],
  bootstrap: [AppComponent]
>>>>>>> 4a155a0d4a1a4a804f6c00867d4c874ba1cb8e5b
})
export class AppModule { }
