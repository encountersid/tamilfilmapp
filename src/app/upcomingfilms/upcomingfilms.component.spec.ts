import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingfilmsComponent } from './upcomingfilms.component';

describe('UpcomingfilmsComponent', () => {
  let component: UpcomingfilmsComponent;
  let fixture: ComponentFixture<UpcomingfilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingfilmsComponent]
    });
    fixture = TestBed.createComponent(UpcomingfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
