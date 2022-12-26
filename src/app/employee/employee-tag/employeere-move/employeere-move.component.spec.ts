import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeereMoveComponent } from './employeere-move.component';

describe('EmployeereMoveComponent', () => {
  let component: EmployeereMoveComponent;
  let fixture: ComponentFixture<EmployeereMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeereMoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeereMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
