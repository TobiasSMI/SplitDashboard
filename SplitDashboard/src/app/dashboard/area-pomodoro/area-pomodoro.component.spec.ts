import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPomodoroComponent } from './area-pomodoro.component';

describe('AreaPomodoroComponent', () => {
  let component: AreaPomodoroComponent;
  let fixture: ComponentFixture<AreaPomodoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaPomodoroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaPomodoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
