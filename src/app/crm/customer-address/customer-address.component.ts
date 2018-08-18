import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.css']
})
export class CustomerAddressComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
  value: any;
  person = {
              firstname: 'Ravi',
              lastname: 'Tambade',
              address: {
                        street: 'Pune Satara Road',
                        zip: '411009',
                        city: 'Pune'
              }
  };
  
  submit(form) {
    this.value = form; 
  }
}
