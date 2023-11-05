import { Component, DoCheck } from '@angular/core';
import getFullTime from 'src/utils/formatted_time';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  zero: number;
  pomodoro: number;
  minutes: number;
  interval: any;
  currentTime: string | any;
  counter: number;

  constructor() {
    this.currentTime = '00:00:00';
    this.counter = 1;
    // pomodoro = 25 mins; short break = 5 mins;
    this.minutes = 25;

    //time reseted to Jan 01 1970 00:00:00 in milliseconds
    this.zero = new Date(0).getTime() + 5 * 60 * 60 * 1000; // 00:00:00
    this.pomodoro = this.zero + this.minutes * 60 * 1000; // 00:25:00
  }

  ngDoCheck(): void {
    if (this.pomodoro === this.zero) {
      if (this.counter === 4) {
        this.counter = 0;
      }

      this.pause();
      this.minutes = this.minutes === 5 ? 25 : 5;
      this.pomodoro = this.zero + this.minutes * 60 * 1000; // 00:05:00 or 00:25:00

      if (this.minutes === 25) {
        this.counter++;
      }

      this.start();
    }

    this.currentTime = getFullTime(this.pomodoro);
  }

  start() {
    const mySound = new Audio('../assets/sound.mp3');
    mySound.play();
    this.interval = setInterval(() => {
      this.pomodoro -= 1000;
      mySound.muted;
    }, 1000);
  }

  pause() {
    clearInterval(this.interval);
  }
}
