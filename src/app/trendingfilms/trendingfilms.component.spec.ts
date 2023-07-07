import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingfilmsComponent } from './trendingfilms.component';

describe('TrendingfilmsComponent', () => {
  let component: TrendingfilmsComponent;
  let fixture: ComponentFixture<TrendingfilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingfilmsComponent]
    });
    fixture = TestBed.createComponent(TrendingfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
