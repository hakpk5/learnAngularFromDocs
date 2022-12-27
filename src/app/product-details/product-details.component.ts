import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromParamsMap = Number(routeParams.get('productId'));

    // Finding the product ID that corresponds to the route param
    this.product = products.find((item) => item.id === productIdFromParamsMap);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(`${product.name} has been added to cart.`);
  }
}
