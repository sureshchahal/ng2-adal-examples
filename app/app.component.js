"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
<<<<<<< HEAD
    function AppComponent(adalService) {
        this.adalService = adalService;
    }
    AppComponent.prototype.login = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \n  <h1>Angular App using ng2-adal for Azure Ad authentication.</h1>\n  \n  <button type=\"button\" (click)=login()>Login</button>\n  "
        }), 
        __metadata('design:paramtypes', [Object])
=======
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>Angular App using ng2-adal for Azure Ad authentication.</h1>'
        }), 
        __metadata('design:paramtypes', [])
>>>>>>> 4a155a0d4a1a4a804f6c00867d4c874ba1cb8e5b
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map