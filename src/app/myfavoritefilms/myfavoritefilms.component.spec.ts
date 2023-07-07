import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfavoritefilmsComponent } from './myfavoritefilms.component';

describe('MyfavoritefilmsComponent', () => {
  let component: MyfavoritefilmsComponent;
  let fixture: ComponentFixture<MyfavoritefilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyfavoritefilmsComponent]
    });
    fixture = TestBed.createComponent(MyfavoritefilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
