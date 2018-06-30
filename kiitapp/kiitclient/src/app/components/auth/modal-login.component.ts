import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
})
export class ModalLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild("modal") modal: ElementRef;
  showModal(): void {
    $(this.modal.nativeElement)
      .modal({
        inverted: true,
        onApprove : function() {
          console.log('approved');
          return false;
        }
      })
      .modal('show')
    ;
  }

}
