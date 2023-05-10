import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPointOfInterestComponent } from './add-point-of-interest.component';

describe('AddPointOfInterestComponent', () => {
  let component: AddPointOfInterestComponent;
  let fixture: ComponentFixture<AddPointOfInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPointOfInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPointOfInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
