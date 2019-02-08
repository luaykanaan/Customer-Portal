import { ToastrService } from 'ngx-toastr';
import { Span } from './../_models/span';
import { Meter } from './../_models/meter';
import { Contract } from './../_models/contract';
import { Bank } from './../_models/bank';
import { Address } from './../_models/address';
import { Component, OnInit } from '@angular/core';
import { User } from './../_models/user';
import { AdminService } from '../_services/admin.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: User = {};
  address: Address = {};
  bank: Bank = {};
  contract: Contract = {};
  meter: Meter = {};
  span: Span = {};
  startDate: Date;
  endDate: Date;

  constructor(private adminService: AdminService, private toastr: ToastrService) { }

  ngOnInit() {
    // this.span.startDate = new Date();
    // console.log(this.span.startDate);
  }

  updateEndDate(event: Date) {
    const sd = event.getDate();
    const sm = event.getMonth();
    const sy = event.getFullYear();

    this.endDate = new Date(sy + 1, sm, sd - 1);
  }

  addCustomer() {
    this.adminService.addCustomer(this.customer).subscribe(
      response => {
        this.toastr.success('You have successfully added a new customer');
      },
      (error: HttpErrorResponse) => {
        this.toastr.error(error.message, 'Failed to add new customer');
      }
    );
  }

}
