import { Component, OnInit } from '@angular/core';
import { PaymentsService } from 'src/app/services/payments.service';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-payment-details-list',
  templateUrl: './payment-details-list.component.html',
  styleUrls: ['./payment-details-list.component.css']
})
export class PaymentDetailsListComponent implements OnInit {

  payments: any;
  currentPayments:any;
  currentIndex = -1;
  searchTitle = '';
  lowValue: number = 0;
  highValue: number = 20;

  ngOnInit(): void {
    this.getAllPayments();
  }
  getAllPayments(): void {
    this.paymentService.list()
      .subscribe(
        (books: any) => {
          this.payments = books;
        },
        (error: any) => {
          console.log(error);
        });
  }
  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
  constructor(private paymentService: PaymentsService){

  }

}
