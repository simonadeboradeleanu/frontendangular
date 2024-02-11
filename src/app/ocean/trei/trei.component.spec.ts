import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreiComponent } from './trei.component';

describe('TreiComponent', () => {
  let component: TreiComponent;
  let fixture: ComponentFixture<TreiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
