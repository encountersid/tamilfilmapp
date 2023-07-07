import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bestof2022filmsComponent } from './bestof2022films.component';

describe('Bestof2022filmsComponent', () => {
  let component: Bestof2022filmsComponent;
  let fixture: ComponentFixture<Bestof2022filmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bestof2022filmsComponent]
    });
    fixture = TestBed.createComponent(Bestof2022filmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
