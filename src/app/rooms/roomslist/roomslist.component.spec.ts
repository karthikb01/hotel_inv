import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomslistComponent } from './roomslist.component';

describe('RoomslistComponent', () => {
  let component: RoomslistComponent;
  let fixture: ComponentFixture<RoomslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomslistComponent]
    });
    fixture = TestBed.createComponent(RoomslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
