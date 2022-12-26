import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMiddleComponent } from './user-middle.component';

describe('UserMiddleComponent', () => {
  let component: UserMiddleComponent;
  let fixture: ComponentFixture<UserMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMiddleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
