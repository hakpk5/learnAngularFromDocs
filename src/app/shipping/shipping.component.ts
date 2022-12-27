import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { Product } from '../products';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  constructor(private cartservice: CartService) {}
  shippingCosts!: Observable<
    {
      type: string;
      price: number;
    }[]
  >;
  ngOnInit(): void {
    this.shippingCosts = this.cartservice.getShippingItems();
  }
}
