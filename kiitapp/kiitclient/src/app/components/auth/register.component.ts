import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
