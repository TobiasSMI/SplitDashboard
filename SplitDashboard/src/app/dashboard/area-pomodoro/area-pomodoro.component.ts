import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-pomodoro',
  templateUrl: './area-pomodoro.component.html',
  styleUrls: ['./area-pomodoro.component.scss'],
})
export class AreaPomodoroComponent implements OnInit {
  pomodoroTime: number = 25;
  pomodoroSeconds: number = 0;
  breakTime: number = 5;
  breakSeconds: number = 0;
  timerActive: boolean = false;
  pomodoroTimer: any;
  breakTimer: any;
  isWorking: boolean = true;
  message: string = 'Keep going, stay productive!';
  breakMessage: string = "Take a break, you've earned it!";

  constructor() {}

  ngOnInit(): void {}

  startTimer() {
    this.isWorking = true;
    this.message = 'Keep going, stay productive!';
    this.timerActive = true;
    this.pomodoroTimer = setInterval(() => {
      if (this.pomodoroSeconds === 0) {
        if (this.pomodoroTime === 0) {
          clearInterval(this.pomodoroTimer);
          this.timerActive = false;
          this.breakTimer = setInterval(() => {
            if (this.breakSeconds === 0) {
              if (this.breakTime === 0) {
                clearInterval(this.breakTimer);
                this.restartTimer();
              } else {
                this.breakTime--;
                this.breakSeconds = 59;
                this.isWorking = false;
                this.message = this.breakMessage;
              }
            } else {
              this.breakSeconds--;
            }
          }, 1000);
        } else {
          this.pomodoroTime--;
          this.pomodoroSeconds = 59;
        }
      } else {
        this.pomodoroSeconds--;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.pomodoroTimer);
    clearInterval(this.breakTimer);
    this.timerActive = false;
    if (this.isWorking) {
      this.message = "Take a break, you've earned it!";
    } else {
      this.message = 'Keep going, stay productive!';
    }
  }

  restartTimer() {
    this.pauseTimer();
    this.pomodoroTime = 25;
    this.pomodoroSeconds = 0;
    this.breakTime = 5;
    this.breakSeconds = 0;
    this.isWorking = true;
    this.message = 'Keep going, stay productive!';
  }
}
