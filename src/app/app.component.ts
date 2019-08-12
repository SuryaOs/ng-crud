import { Component } from '@angular/core';
import { OrdersService } from "./shared/orders.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'ng-ap';
  constructor(private ordersService: OrdersService) { }
}
