import { Component } from '@angular/core';

@Component({
  selector: 'animation-component',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
})
export default class AnimationComponent {
  counter: number;
  interval: any;

  constructor() {
    this.counter = 3;
    this.tictoc();
  }

  tictoc() {
    this.interval = setInterval(() => {
      this.counter--;
      if (this.counter === 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }
}
