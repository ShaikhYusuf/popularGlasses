import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCoatingComponent } from './color-coating.component';

describe('ColorCoatingComponent', () => {
  let component: ColorCoatingComponent;
  let fixture: ComponentFixture<ColorCoatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorCoatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorCoatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
