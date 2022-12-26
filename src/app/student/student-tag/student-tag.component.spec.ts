import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTagComponent } from './student-tag.component';

describe('StudentTagComponent', () => {
  let component: StudentTagComponent;
  let fixture: ComponentFixture<StudentTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
