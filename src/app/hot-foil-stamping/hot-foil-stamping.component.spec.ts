import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotFoilStampingComponent } from './hot-foil-stamping.component';

describe('HotFoilStampingComponent', () => {
  let component: HotFoilStampingComponent;
  let fixture: ComponentFixture<HotFoilStampingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotFoilStampingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotFoilStampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
