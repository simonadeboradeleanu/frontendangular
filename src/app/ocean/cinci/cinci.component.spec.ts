import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinciComponent } from './cinci.component';

describe('CinciComponent', () => {
  let component: CinciComponent;
  let fixture: ComponentFixture<CinciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
