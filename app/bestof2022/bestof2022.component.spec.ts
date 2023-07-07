import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bestof2022Component } from './bestof2022.component';

describe('Bestof2022Component', () => {
  let component: Bestof2022Component;
  let fixture: ComponentFixture<Bestof2022Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bestof2022Component]
    });
    fixture = TestBed.createComponent(Bestof2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
