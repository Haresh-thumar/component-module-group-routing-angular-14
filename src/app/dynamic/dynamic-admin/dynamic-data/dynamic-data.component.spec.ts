import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDataComponent } from './dynamic-data.component';

describe('DynamicDataComponent', () => {
  let component: DynamicDataComponent;
  let fixture: ComponentFixture<DynamicDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
