import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View1sub2Component } from './view1sub2.component';

describe('View1sub2Component', () => {
  let component: View1sub2Component;
  let fixture: ComponentFixture<View1sub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View1sub2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View1sub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
