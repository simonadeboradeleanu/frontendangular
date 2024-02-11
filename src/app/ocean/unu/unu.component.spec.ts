import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnuComponent } from './unu.component';

describe('UnuComponent', () => {
  let component: UnuComponent;
  let fixture: ComponentFixture<UnuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
