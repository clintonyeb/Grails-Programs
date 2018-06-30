import {Component, OnInit, Input, AfterViewInit} from "@angular/core";
import {MenuItem} from "../../models/menu-item";
import {User} from "../../models/user";

declare const $: any;

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
  }

  @Input() menuItems: MenuItem[];
  @Input() user: User;

  constructor() {}

  ngOnInit() {
  }

}
