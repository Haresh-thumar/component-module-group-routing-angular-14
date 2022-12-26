import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedItemComponent } from './employeed-item.component';

describe('EmployeedItemComponent', () => {
  let component: EmployeedItemComponent;
  let fixture: ComponentFixture<EmployeedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
