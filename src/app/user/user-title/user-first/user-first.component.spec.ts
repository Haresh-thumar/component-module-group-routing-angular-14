import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFirstComponent } from './user-first.component';

describe('UserFirstComponent', () => {
  let component: UserFirstComponent;
  let fixture: ComponentFixture<UserFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
