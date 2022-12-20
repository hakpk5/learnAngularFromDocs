import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product, products} from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: Product | undefined;

  constructor(private route: ActivatedRoute){
  
  }
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromParamsMap = Number(routeParams.get('productId'));

    // Finding the product ID that corresponds to the route param
    this.product = products.find(item => item.id === productIdFromParamsMap);
  }
  
}
