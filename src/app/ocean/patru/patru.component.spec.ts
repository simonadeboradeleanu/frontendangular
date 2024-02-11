import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatruComponent } from './patru.component';

describe('PatruComponent', () => {
  let component: PatruComponent;
  let fixture: ComponentFixture<PatruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
