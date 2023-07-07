import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconderheaderComponent } from './seconderheader.component';

describe('SeconderheaderComponent', () => {
  let component: SeconderheaderComponent;
  let fixture: ComponentFixture<SeconderheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeconderheaderComponent]
    });
    fixture = TestBed.createComponent(SeconderheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
