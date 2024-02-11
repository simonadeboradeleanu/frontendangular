import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSharkComponent } from './add-edit-shark.component';

describe('AddEditSharkComponent', () => {
  let component: AddEditSharkComponent;
  let fixture: ComponentFixture<AddEditSharkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSharkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditSharkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
