var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewChild } from '@angular/core';
export var ModalLoginComponent = (function () {
    function ModalLoginComponent() {
    }
    ModalLoginComponent.prototype.ngOnInit = function () {
    };
    ModalLoginComponent.prototype.showModal = function () {
        $(this.modal.nativeElement)
            .modal({
            inverted: true,
            onApprove: function () {
                console.log('approved');
                return false;
            }
        })
            .modal('show');
    };
    __decorate([
        ViewChild("modal"), 
        __metadata('design:type', ElementRef)
    ], ModalLoginComponent.prototype, "modal", void 0);
    ModalLoginComponent = __decorate([
        Component({
            selector: 'app-modal-login',
            templateUrl: './modal-login.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ModalLoginComponent);
    return ModalLoginComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/app/components/auth/modal-login.component.js.map