import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOrderComponent } from './student-order.component';

describe('StudentOrderComponent', () => {
  let component: StudentOrderComponent;
  let fixture: ComponentFixture<StudentOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
