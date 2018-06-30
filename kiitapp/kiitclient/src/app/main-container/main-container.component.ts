import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {Content, Tweet} from "../models/content";
import {MenuItem} from "../models/menu-item";
import {User} from "../models/user";
import {ModalLoginComponent} from "../components/auth/modal-login.component";
import {ContentService} from "../services/content.service";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";



declare const $: any;

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  menuItems: MenuItem[];
  contents: Observable<Content[]>;
  tweets: Observable<Tweet[]>;
  user: User;
  loginModalShowing: boolean = false;
  @ViewChild(ModalLoginComponent) modalLogin;

  ngOnInit(): void {
    this.contents = this.contentService.getContent();
    this.tweets = this.contentService.getContent();
    this.menuItems = this.contentService.createMenuItems();
    this.user = this.userService.getCurrentUser();
  }

  constructor(public contentService: ContentService,
              public userService: UserService,
              public router: Router) {
  }

  changeSideNavState() {
    $('.ui.sidebar')
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('toggle')
    ;
  }

  topBarButtonClicked(value: string) {
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
  }

  modalShown(state: boolean) {
    this.loginModalShowing = false;
  }

}
