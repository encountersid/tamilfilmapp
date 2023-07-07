import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeoptsComponent } from './welcomeopts.component';

describe('WelcomeoptsComponent', () => {
  let component: WelcomeoptsComponent;
  let fixture: ComponentFixture<WelcomeoptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeoptsComponent]
    });
    fixture = TestBed.createComponent(WelcomeoptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
