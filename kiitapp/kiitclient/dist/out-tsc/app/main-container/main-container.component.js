var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { ModalLoginComponent } from "../components/auth/modal-login.component";
import { ContentService } from "../services/content.service";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
export var MainContainerComponent = (function () {
    function MainContainerComponent(contentService, userService, router) {
        this.contentService = contentService;
        this.userService = userService;
        this.router = router;
        this.loginModalShowing = false;
    }
    MainContainerComponent.prototype.ngOnInit = function () {
        this.contents = this.contentService.getContent();
        this.tweets = this.contentService.getContent();
        this.menuItems = this.contentService.createMenuItems();
        this.user = this.userService.getCurrentUser();
    };
    MainContainerComponent.prototype.changeSideNavState = function () {
        $('.ui.sidebar')
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle');
    };
    MainContainerComponent.prototype.topBarButtonClicked = function (value) {
        switch (value) {
            case 'login':
                //this.modalLogin.showModal();
                this.router.navigate(['/login']);
                break;
            case 'menu':
                this.changeSideNavState();
                break;
            case 'register':
                this.router.navigate(['/register']);
                break;
            case 'song':
                break;
            case 'feedback':
                break;
        }
    };
    MainContainerComponent.prototype.modalShown = function (state) {
        this.loginModalShowing = false;
    };
    __decorate([
        ViewChild(ModalLoginComponent), 
        __metadata('design:type', Object)
    ], MainContainerComponent.prototype, "modalLogin", void 0);
    MainContainerComponent = __decorate([
        Component({
            selector: 'app-main-container',
            templateUrl: './main-container.component.html',
            styleUrls: ['./main-container.component.css']
        }), 
        __metadata('design:paramtypes', [ContentService, UserService, Router])
    ], MainContainerComponent);
    return MainContainerComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/app/main-container/main-container.component.js.map