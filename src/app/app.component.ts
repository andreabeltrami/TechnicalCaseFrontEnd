import { Component, OnInit } from '@angular/core';
import { CustomerService } from './api/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  va: any;
  constructor(private customerService: CustomerService)
  {

  }

  ngOnInit(): void {
   this.customerService.apiCustomerGetAllGet().subscribe(res => {
    this.va = res;
   })
  }

}
