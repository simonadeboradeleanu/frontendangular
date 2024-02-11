import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOceanComponent } from './show-ocean.component';

describe('ShowOceanComponent', () => {
  let component: ShowOceanComponent;
  let fixture: ComponentFixture<ShowOceanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOceanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOceanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
