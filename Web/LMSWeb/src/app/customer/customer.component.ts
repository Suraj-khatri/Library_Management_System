import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  public displayedColumns: any;
  public dataSource: any;


  constructor(public router:Router,private cService : CustomerService) { }
  formObject={
    userId: localStorage.getItem('userPersonId')
  };
  public customerDetails: any = [
  ];
  ngOnInit(): void {
    this.getCustomerDetails();
  }

  logout(){
    localStorage.removeItem('userPersonId');
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }


  getCustomerDetails() {

    this.cService.getCustomerDetails(this.formObject).subscribe((res) => {
      if (res) {
        this.customerDetails = res.data;
        this.dataSource = res.data;
        console.log(res.data);
        this.displayedColumns = res.column;
     //this.displayedColumns = [...this.displayedColumns , ...this.action];

      }
    });
  }

}
