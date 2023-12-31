import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import TimerComponent from './components/timer/timer.component';
import ButtonComponent from './components/button/button.component';
import AnimationComponent from './components/animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ButtonComponent,
    AnimationComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
