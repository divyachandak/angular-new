import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterploationComponent } from './interploation.component';

describe('InterploationComponent', () => {
  let component: InterploationComponent;
  let fixture: ComponentFixture<InterploationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterploationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterploationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
