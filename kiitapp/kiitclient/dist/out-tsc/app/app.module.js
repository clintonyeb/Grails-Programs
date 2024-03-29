var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { SideMenuComponent } from "./components/sidebar/side-menu.component";
import { SideHeaderComponent } from "./components/sidebar/side-header.component";
import { SearchBoxComponent } from "./components/others/search-box.component";
import { SideBarComponent } from "./components/sidebar/side-bar.component";
import { ProfileComponent } from "./components/others/profile.component";
import { MapComponent } from "./components/others/map.component";
import { KiitInfoComponent } from "./components/others/kiit-info.component";
import { HelpComponent } from "./components/others/help.component";
import { AttributionComponent } from "./components/others/attribution.component";
import { TermsComponent } from "./components/others/terms.component";
import { ContentComponent } from "./components/content/content.component";
import { TweetComponent } from "./components/content/tweet.component";
import { ContentContainerComponent } from "./components/content/content-container.component";
import { TopBarComponent } from "./components/others/top-bar.component";
import { LoginComponent } from "./components/auth/login.component";
import { RegisterComponent } from "./components/auth/register.component";
import { TweetSmartComponent } from "./components/content/tweet-smart.component";
import { ContentService } from "./services/content.service";
import { UserService } from "./services/user.service";
import { AnnouncementComponent } from "./components/content/announcement.component";
import { ArticleComponent } from "./components/content/article.component";
import { ContentEditorComponent } from "./components/others/content-editor.component";
import { SituationComponent } from "./components/content/situation.component";
import { reducer } from "./reducers/index";
import { StoreModule } from "@ngrx/store";
import { ModalLoginComponent } from './components/auth/modal-login.component';
import { AppRoutingModule } from "./app-routing-module";
import { MainContainerComponent } from './main-container/main-container.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                SideMenuComponent,
                SideHeaderComponent,
                SearchBoxComponent,
                SideBarComponent,
                ProfileComponent,
                MapComponent,
                KiitInfoComponent,
                HelpComponent,
                AttributionComponent,
                TermsComponent,
                ContentComponent,
                TweetComponent,
                ContentContainerComponent,
                TopBarComponent,
                LoginComponent,
                RegisterComponent,
                TweetSmartComponent,
                AnnouncementComponent,
                ArticleComponent,
                ContentEditorComponent,
                SituationComponent,
                ModalLoginComponent,
                MainContainerComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                HttpModule,
                StoreModule.provideStore(reducer),
                AppRoutingModule
            ],
            providers: [ContentService, UserService],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/app/app.module.js.map