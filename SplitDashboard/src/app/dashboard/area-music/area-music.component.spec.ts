import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaMusicComponent } from './area-music.component';

describe('AreaMusicComponent', () => {
  let component: AreaMusicComponent;
  let fixture: ComponentFixture<AreaMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaMusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
