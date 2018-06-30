import {Component, OnInit, Input} from "@angular/core";
import {MenuItem} from "../../models/menu-item";


@Component({
  selector: 'app-side-menu',
  template: `
    <a class="item" >
  {{menu.name}}
  <div class="ui label" [ngClass]="{'left pointing teal': menu.count}">
    {{menu.count}}
  </div>
</a>
`
})
export class SideMenuComponent implements OnInit {

  @Input() menu: MenuItem;
 // @Input() link: string;
  //@Input() active: boolean;

  constructor() { }

  ngOnInit() {
  }

}
