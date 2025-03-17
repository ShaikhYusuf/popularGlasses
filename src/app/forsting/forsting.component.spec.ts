import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForstingComponent } from './forsting.component';

describe('ForstingComponent', () => {
  let component: ForstingComponent;
  let fixture: ComponentFixture<ForstingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForstingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForstingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
