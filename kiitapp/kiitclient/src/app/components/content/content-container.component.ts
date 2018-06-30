import {Component, OnInit, Input, ChangeDetectionStrategy} from "@angular/core";
import {Content} from "../../models/content";

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentContainerComponent implements OnInit {

  @Input() contents: Content[];
  constructor() { }

  ngOnInit() {
  }

}
