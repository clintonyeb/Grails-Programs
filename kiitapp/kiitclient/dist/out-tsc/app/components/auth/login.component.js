var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { FormBuilder } from "@angular/forms";
import { UserService } from "../../services/user.service";
export var LoginComponent = (function () {
    function LoginComponent(userService, router, store, formBuilder) {
        this.userService = userService;
        this.router = router;
        this.store = store;
        this.loading = false;
        this.success = false;
        this.errors = false;
        this.formGroup = formBuilder.group({
            'username': [''],
            'password': ['']
        });
        this.username = this.formGroup.controls['username'];
        this.password = this.formGroup.controls['password'];
    }
    LoginComponent.prototype.ngOnInit = function () {
        //this.authService.logOut();
        //this.user = this.store.select(store => store.user)
    };
    LoginComponent.prototype.onSubmit = function (f) {
        if ($('.ui.form').valid) {
            this.loading = true;
            this.userService.loginUser(f.username, f.password)
                .subscribe(function (data) {
                /*this.success = true;
                 this.errors = false;
                 this.loading = false;*/
                // this.router.navigate(['/home/index']) //TODO: navigate to homepage after authetication
            }, function (err) {
                /*this.errors = true;
                 this.success = false;
                 this.loading = false;*/
            });
        }
    };
    LoginComponent.prototype.formClasses = function () {
        return {};
    };
    LoginComponent.prototype.onSignUpClicked = function () {
        this.router.navigate(['/register']);
        return false;
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        $('.ui.form')
            .form({
            on: 'blur',
            inline: true,
            fields: {
                username: {
                    identifier: 'username',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please provide a username'
                        }
                    ]
                },
                password: {
                    identifier: 'password',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter your password'
                        }
                    ]
                }
            }
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styles: ["\n.root{\n  background-color: #DADADA;\n  height: 100%;\n}\n\n.root > .grid {\n  height: 100%;\n}\n.image {\n  margin-top: -100px;\n}\n.column {\n  max-width: 450px;\n}"],
            changeDetection: ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [UserService, Router, Store, FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/app/components/auth/login.component.js.map