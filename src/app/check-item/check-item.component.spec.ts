import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckItemComponent } from './check-item.component';

describe('CheckItemComponent', () => {
  let component: CheckItemComponent;
  let fixture: ComponentFixture<CheckItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckItemComponent]
    });
    fixture = TestBed.createComponent(CheckItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
