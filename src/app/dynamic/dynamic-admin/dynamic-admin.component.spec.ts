import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAdminComponent } from './dynamic-admin.component';

describe('DynamicAdminComponent', () => {
  let component: DynamicAdminComponent;
  let fixture: ComponentFixture<DynamicAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
