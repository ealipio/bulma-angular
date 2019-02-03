import { Component, OnInit } from '@angular/core';
import { DataService } from '../app.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orders: any;
  public order = 'number';
  public userFilter: any = { number: '' };
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.orders = this.dataService.getOrders();
  }

}
