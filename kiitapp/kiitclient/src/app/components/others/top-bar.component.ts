import {Component, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  menuButtonClicked(){
    this.buttonClicked.emit('menu');
    return false;
  }

  loginButtonClicked(){
    this.buttonClicked.emit('login');
  }

  registerButtonClicked(){
    this.buttonClicked.emit('register');
  }

  helpButtonClicked(){
    this.buttonClicked.emit('help');
  }
}
