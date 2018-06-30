import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./components/auth/login.component";
import {RegisterComponent} from "./components/auth/register.component";
import {MainContainerComponent} from "./main-container/main-container.component";

const routes: Routes = [
  {path: 'index', component: MainContainerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: '**', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export  class AppRoutingModule {

}
