import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { CratePaymentDetailsComponent } from './feature/payment-details/crate-payment-details/crate-payment-details.component';

const routes: Routes=[
  {path: '', redirectTo:'payments',pathMatch:'full'},
  //{path:'payments' , component: ListComponent},
  {path:'books/:id', component:DetailsComponent},
  {path:'payments' , loadChildren: ()=> import('../app/feature/payment-details/payment-details.module').then(x=> x.PaymentDetailsModule)
}

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
