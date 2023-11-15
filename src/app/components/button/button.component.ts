import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export default class ButtonComponent {
  @Input() name: any;

  @Output() buttonClicked = new EventEmitter();

  clicked() {
    this.buttonClicked.emit();
  }
}
