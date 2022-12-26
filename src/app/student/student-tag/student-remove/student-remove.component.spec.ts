import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRemoveComponent } from './student-remove.component';

describe('StudentRemoveComponent', () => {
  let component: StudentRemoveComponent;
  let fixture: ComponentFixture<StudentRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRemoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
