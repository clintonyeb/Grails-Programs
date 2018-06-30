import {
  Component, OnInit, ChangeDetectionStrategy, Input, DoCheck, Output, EventEmitter,
  OnChanges, SimpleChanges, ViewChild, ElementRef, AfterViewInit
} from "@angular/core";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {FormBuilder, AbstractControl, FormGroup} from "@angular/forms";
import {AppState} from "../../reducers/index";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {Observable} from "rxjs";

declare const $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
.root{
  background-color: #DADADA;
  height: 100%;
}

.root > .grid {
  height: 100%;
}
.image {
  margin-top: -100px;
}
.column {
  max-width: 450px;
}`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, AfterViewInit{

  formGroup: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  user: Observable<User>;
  loading: boolean = false;
  success: boolean = false;
  errors: boolean = false;
  unknownError: boolean;

  constructor(public userService: UserService,
              public router: Router,
              public store: Store<AppState>,
              formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      'username': [''],
      'password': ['']
    });

    this.username = this.formGroup.controls['username'];
    this.password = this.formGroup.controls['password'];
  }

  ngOnInit() {
    //this.authService.logOut();
    //this.user = this.store.select(store => store.user)
  }

  onSubmit(f: any) {
    if ($('.ui.form').valid) {
       this.loading = true;
      this.userService.loginUser(f.username, f.password)
        .subscribe(data => {
          /*this.success = true;
           this.errors = false;
           this.loading = false;*/
          // this.router.navigate(['/home/index']) //TODO: navigate to homepage after authetication
        }, err => {
          /*this.errors = true;
           this.success = false;
           this.loading = false;*/
        });
    }

  }

  formClasses() {
    return {
      /*loading: this.loading,
       success: this.success,
       error: this.errors*/
    };
  }

  onSignUpClicked() {
    this.router.navigate(['/register']);
    return false;
  }

  ngAfterViewInit(): void {
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
  }

}
