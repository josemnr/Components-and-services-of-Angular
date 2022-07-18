import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from '../../services/store.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = []
  today = new Date();
  date = new Date(2021, 1, 21)

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) { 
    this.myShoppingCart = this.storeService.getMyShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

  onAddToShoppingCart(product:Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
