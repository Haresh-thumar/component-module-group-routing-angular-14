import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRejoinComponent } from './student-rejoin.component';

describe('StudentRejoinComponent', () => {
  let component: StudentRejoinComponent;
  let fixture: ComponentFixture<StudentRejoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRejoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentRejoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
