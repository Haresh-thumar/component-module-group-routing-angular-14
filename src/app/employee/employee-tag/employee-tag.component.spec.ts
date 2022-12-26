import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTagComponent } from './employee-tag.component';

describe('EmployeeTagComponent', () => {
  let component: EmployeeTagComponent;
  let fixture: ComponentFixture<EmployeeTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
