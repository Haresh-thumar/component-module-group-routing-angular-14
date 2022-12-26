import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrackComponent } from './user-track.component';

describe('UserTrackComponent', () => {
  let component: UserTrackComponent;
  let fixture: ComponentFixture<UserTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
