import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicOrderComponent } from './dynamic-order.component';

describe('DynamicOrderComponent', () => {
  let component: DynamicOrderComponent;
  let fixture: ComponentFixture<DynamicOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
