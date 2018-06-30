import {Component, OnInit, Input, ChangeDetectionStrategy} from "@angular/core";
import {Tweet} from "../../models/content";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetComponent implements OnInit {

  @Input() tweet: Tweet;
  constructor() { }

  ngOnInit() {
  }

}
