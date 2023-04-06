import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaTextEditorComponent } from './area-text-editor.component';

describe('AreaTextEditorComponent', () => {
  let component: AreaTextEditorComponent;
  let fixture: ComponentFixture<AreaTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaTextEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
