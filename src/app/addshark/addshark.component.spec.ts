import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsharkComponent } from './addshark.component';

describe('AddsharkComponent', () => {
  let component: AddsharkComponent;
  let fixture: ComponentFixture<AddsharkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsharkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsharkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
