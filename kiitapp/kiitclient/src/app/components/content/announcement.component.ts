import {Component, OnInit, Input, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AnnouncementComponent implements OnInit {

  @Input() content;
  constructor() { }

  ngOnInit() {
  }

}
