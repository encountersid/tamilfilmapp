import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfavmoviesComponent } from './myfavmovies.component';

describe('MyfavmoviesComponent', () => {
  let component: MyfavmoviesComponent;
  let fixture: ComponentFixture<MyfavmoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyfavmoviesComponent]
    });
    fixture = TestBed.createComponent(MyfavmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
