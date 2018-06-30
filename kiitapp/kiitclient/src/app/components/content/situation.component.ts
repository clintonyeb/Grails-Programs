import {Component, OnInit, Input, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SituationComponent implements OnInit {

  @Input() content;
  constructor() { }

  ngOnInit() {
  }

}
