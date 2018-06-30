import {Component, OnInit, Input, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {

  @Input() content;
  constructor() { }

  ngOnInit() {
  }

}
