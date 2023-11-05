import { Component, Input } from '@angular/core';

@Component({
  selector: 'timer-component',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export default class TimerComponent {
  @Input({ required: true }) pomodoro!: Number;
}
