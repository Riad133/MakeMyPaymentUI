import { Component, OnInit } from '@angular/core';
import { PaymentsService } from 'src/app/services/payments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  payments: any;
  currentPayments:any;
  currentIndex = -1;
  searchTitle = '';

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

  constructor(private paymentService: PaymentsService){

  }
}
