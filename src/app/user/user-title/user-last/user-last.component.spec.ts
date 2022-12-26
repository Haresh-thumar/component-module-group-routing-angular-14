import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLastComponent } from './user-last.component';

describe('UserLastComponent', () => {
  let component: UserLastComponent;
  let fixture: ComponentFixture<UserLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
