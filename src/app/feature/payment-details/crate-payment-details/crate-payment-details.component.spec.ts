import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CratePaymentDetailsComponent } from './crate-payment-details.component';

describe('CratePaymentDetailsComponent', () => {
  let component: CratePaymentDetailsComponent;
  let fixture: ComponentFixture<CratePaymentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CratePaymentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CratePaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
