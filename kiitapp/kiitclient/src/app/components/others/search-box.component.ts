import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-search-box',
  template: `
<div class="item">
  <div class="ui transparent icon input">
    <input type="text" placeholder="Search...">
    <i class="search icon"></i>
  </div>
</div>
`
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
