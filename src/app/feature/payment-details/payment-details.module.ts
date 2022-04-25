import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CratePaymentDetailsComponent } from './crate-payment-details/crate-payment-details.component';
import { FormsModule } from '@angular/forms';
import { PaymentDetailsRoutingModule } from './payment-details-routing.module';
import { PaymentDetailsListComponent } from './payment-details-list/payment-details-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    CratePaymentDetailsComponent,
    PaymentDetailsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PaymentDetailsRoutingModule,
    MatPaginatorModule 
  ]
})
export class PaymentDetailsModule { }
