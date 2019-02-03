import { Component, OnInit } from '@angular/core';
import { DataService } from '../app.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: any;
  order = 'name';
  userFilter: any = { name: '' };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.customers = this.dataService.getCustomers();
  }

  add() {
    console.log('You can\'t add data in this DEMO');
  }

  delete() {
    console.log('You can\'t delete data in this DEMO');
  }
}
