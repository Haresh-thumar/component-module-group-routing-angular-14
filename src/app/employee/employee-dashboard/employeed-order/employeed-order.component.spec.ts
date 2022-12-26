import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedOrderComponent } from './employeed-order.component';

describe('EmployeedOrderComponent', () => {
  let component: EmployeedOrderComponent;
  let fixture: ComponentFixture<EmployeedOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
