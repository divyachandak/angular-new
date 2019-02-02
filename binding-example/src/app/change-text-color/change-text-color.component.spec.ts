import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTextColorComponent } from './change-text-color.component';

describe('ChangeTextColorComponent', () => {
  let component: ChangeTextColorComponent;
  let fixture: ComponentFixture<ChangeTextColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTextColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTextColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
