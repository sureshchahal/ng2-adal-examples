import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterModule }   from '@angular/router';
import {WelcomeComponent} from './welcome.component';
import {AdalService} from "ng2-adal/services";
import {SecretService} from './services/secret.service';




@Component({
  selector: 'my-app',
  template: `
  
  <h1>Angular App using ng2-adal for Azure Ad authentication.</h1>
  <router-outlet></router-outlet>
  `
})
export class AppComponent { 

  constructor(private adalService: AdalService,
  private secretService: SecretService)
  {
    this.adalService.init(this.secretService.adalConfig);
  }

}
=======
@Component({
  selector: 'my-app',
  template: '<h1>Angular App using ng2-adal for Azure Ad authentication.</h1>'
})
export class AppComponent { }
>>>>>>> 4a155a0d4a1a4a804f6c00867d4c874ba1cb8e5b
