import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CratePaymentDetailsComponent } from './crate-payment-details/crate-payment-details.component';
import { PaymentDetailsListComponent } from './payment-details-list/payment-details-list.component';

const routes: Routes=[
  {path: '', redirectTo:'payments',pathMatch:'full'},
  {path:'add' , component: CratePaymentDetailsComponent},
  {path:'payments' , component: PaymentDetailsListComponent},


]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PaymentDetailsRoutingModule { }
