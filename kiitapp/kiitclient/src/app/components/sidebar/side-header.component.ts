import {Component, OnInit, Input, AfterViewInit} from "@angular/core";
import {User} from "../../models/user";

@Component({
  selector: 'app-side-header',
  template:  `
  <a class="teal item">
  <div class="ui teal header">
    <img #avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" 
    alt="image" class="ui mini circular image">
    <div class="content">
      {{user.authUser.username}}
      <div class="ui blue sub header">{{user.uniqueId}}</div>
    </div>
  </div>
</a>
`
})
export class SideHeaderComponent implements OnInit , AfterViewInit{
 // @ViewChild('avatar') avatar;

  ngAfterViewInit(): void {
   // this.avatar.nativeElement.setAttribute('src', this.user.avatar.avatarByte);
  }

  @Input() user: User;

  constructor() {}

  ngOnInit() {
  }

}
