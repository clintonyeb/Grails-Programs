import {Component, OnInit, Input, ChangeDetectionStrategy} from "@angular/core";
import {Content} from "../../models/content";

@Component({
  selector: 'app-content',
  template: `
    <div class="ui top ribbon label">{{content.contentType}}</div>
   <!-- <app-content-editors></app-content-editors>-->
    <div class="ui large feed">
      <div class="event">
        <div class="label">
          <a><i [class]="content.icon"></i></a>
        </div>
        <div class="content">
          <div class="summary">
            <a>
              {{content.contentType}}
            </a> pay attention, please!
            <span class="date">
                       {{content.lastUpdated}}
                    </span>
          </div>
          <!--here-->
          <h2 *ngIf="content.title" class="ui teal sub header">
            <b>{{content.title}}</b>
          </h2>
          <div class="description">
            <p>
              {{content.text}}
            </p>
          </div>
          <div *ngIf="content.contentType === 'event'">
              <div class="ui middle aligned animated selection relaxed list">
          <a class="item">
            <i class="paint brush icon"></i>
            Dance Party
          </a>
          <a class="item">
            <i class="calendar icon"></i>
            22nd October, 2017
          </a>
          <a class="item">
            <i class="alarm icon"></i>
            2:00 pm sharp!
          </a>
          <a class="item">
            <i class="university icon"></i>
            Campus 6
          </a>
          <a class="item">
            <i class="rupee icon"></i>
            Free!
          </a>
        </div>
            </div>
          <div *ngFor="let avatar of content.avatars" class="extra images">
          <a><img src="../../images/custom/male-avatar-small.png"></a>
        </div>
        <div *ngFor="let tag of content.tags" class="ui middle aligned selection relaxed horizontal list">
          <a class="item">
            <i class="tag icon"></i> {{tag.tagName}}
          </a>
        </div>
          <div class="meta">
          <a class="like">
            <i class="thumbs up icon"></i> {{content.vote.upVotes}} UpVotes
          </a>
          <a class="like">
            <i class="thumbs down icon"></i> {{content.vote.downVotes}} DownVotes
          </a>
        </div>
          <!--here-->
          <div class="ui selection list">
            <span class="meta">Submitted by:</span>
            <a class="item">
              <i class="spy icon"></i>
              {{content.user.authUser.username}}
            </a>
          </div>
        </div>
      </div>
    </div>
`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit {

  @Input() content: Content;

  constructor() {
  }

  ngOnInit() {
  }

}
