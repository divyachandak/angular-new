import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputOutputComponent } from './custom-input-output.component';

describe('CustomInputOutputComponent', () => {
  let component: CustomInputOutputComponent;
  let fixture: ComponentFixture<CustomInputOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomInputOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
