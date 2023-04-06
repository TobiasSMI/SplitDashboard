import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaTodoComponent } from './area-todo.component';

describe('AreaTodoComponent', () => {
  let component: AreaTodoComponent;
  let fixture: ComponentFixture<AreaTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
