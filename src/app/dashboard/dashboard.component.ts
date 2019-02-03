import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  filter = 'Yesterday';
  statistics = [
    { orders: 10, revenue: 1500, visitors: '3 M', pageviews: 15465 }
  ];

  onChange(e) {}
}
