import { Component, OnInit } from '@angular/core';
import { PaymentsService } from 'src/app/services/payments.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  payment = {
    cardOwnerName: '',
    cardNumber: '',
    expirationDate:'',
    securityCode:''

  };
  isBookAdded = false;
  constructor(private paymentService: PaymentsService){

  }
  ngOnInit(): void {
    
  }
  addPaymentDetails():void {
 
    const data = {
      cardOwnerName: this.payment.cardOwnerName,
      cardNumber: this.payment.cardNumber,
      expirationDate: this.payment.expirationDate,
      securityCode: this.payment.securityCode,
    };
    if (!data.cardOwnerName) {
      alert('Please add Name!');
      return;
    }
    if (!data.cardNumber) {
      alert('Please add card Number!');
      return;
    }
    if (!data.expirationDate) {
      alert('Please add card expiration Date!');
      return;
    }
    if (!data.securityCode) {
      alert('Please add card securityCode!');
      return;
    }

    this.paymentService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isBookAdded = true;
        },
        error => {
          console.log(error);
        });
  }
  // Reset on adding new
  newBook(): void {
    this.isBookAdded = false;
    this.payment = {
      cardOwnerName: '',
      cardNumber: '',
      expirationDate:'',
      securityCode:''
    };
  }


}
