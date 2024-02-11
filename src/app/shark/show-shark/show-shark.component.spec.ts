import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSharkComponent } from './show-shark.component';

describe('ShowSharkComponent', () => {
  let component: ShowSharkComponent;
  let fixture: ComponentFixture<ShowSharkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSharkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSharkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
