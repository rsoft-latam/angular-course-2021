import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View1sub1Component } from './view1sub1.component';

describe('View1sub1Component', () => {
  let component: View1sub1Component;
  let fixture: ComponentFixture<View1sub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View1sub1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View1sub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
