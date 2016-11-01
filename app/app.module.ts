import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
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
})
export class AppModule { }
