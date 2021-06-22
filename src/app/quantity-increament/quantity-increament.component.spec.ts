import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityIncreamentComponent } from './quantity-increament.component';

describe('QuantityIncreamentComponent', () => {
  let component: QuantityIncreamentComponent;
  let fixture: ComponentFixture<QuantityIncreamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityIncreamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityIncreamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
