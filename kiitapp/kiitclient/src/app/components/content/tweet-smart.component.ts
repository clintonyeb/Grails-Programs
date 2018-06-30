import {Component, OnInit, Input, ChangeDetectionStrategy} from "@angular/core";
import {Tweet} from "../../models/content";

@Component({
  selector: 'app-tweet-smart',
  templateUrl: './tweet-smart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetSmartComponent implements OnInit {

  @Input() tweets: Tweet[];
  constructor() { }

  ngOnInit() {
  }

}
