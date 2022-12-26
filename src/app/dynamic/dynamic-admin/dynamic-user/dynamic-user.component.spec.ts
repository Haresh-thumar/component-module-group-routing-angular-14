import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicUserComponent } from './dynamic-user.component';

describe('DynamicUserComponent', () => {
  let component: DynamicUserComponent;
  let fixture: ComponentFixture<DynamicUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
