import {Component, OnInit} from '@angular/core';
import {AdalService} from "ng2-adal/services";


@Component({
    selector: 'welcome',
    template: `
        <h1>Welcome {{UserName}}</h1>
        <button *ngIf="!IsAuthenticated" (click)="logIn()">Login</button>
        <button *ngIf="IsAuthenticated" (click)="logOut()">Login</button>
    `
})

export class WelcomeComponent implements OnInit {

    constructor(
        private adalService: AdalService
    ) {
        console.log('Entering welcome');        
        this.adalService.handleWindowCallback();
        if (this.adalService.userInfo.isAuthenticated) {
            
        }
    }

    public ngOnInit() {
        console.log('ngOnInit is called');
    }

    public logIn() {
        this.adalService.login();
    }

    public logout(){
        this.adalService.logOut();
    }

    public get IsAuthenticated(){
        return this.adalService.userInfo.isAuthenticated;
    }

    public get UserName() {
        if(this.adalService.userInfo)
        {
            return this.adalService.userInfo.userName;
        } 

        return "Guest";
    }
}