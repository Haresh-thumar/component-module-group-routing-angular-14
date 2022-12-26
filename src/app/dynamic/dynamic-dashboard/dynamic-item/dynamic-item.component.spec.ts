import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicItemComponent } from './dynamic-item.component';

describe('DynamicItemComponent', () => {
  let component: DynamicItemComponent;
  let fixture: ComponentFixture<DynamicItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
