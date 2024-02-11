import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSharkOceanComponent } from './show-shark-ocean.component';

describe('ShowSharkOceanComponent', () => {
  let component: ShowSharkOceanComponent;
  let fixture: ComponentFixture<ShowSharkOceanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSharkOceanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSharkOceanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
