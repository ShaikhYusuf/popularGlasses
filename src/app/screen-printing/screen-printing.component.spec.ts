import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPrintingComponent } from './screen-printing.component';

describe('ScreenPrintingComponent', () => {
  let component: ScreenPrintingComponent;
  let fixture: ComponentFixture<ScreenPrintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenPrintingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
