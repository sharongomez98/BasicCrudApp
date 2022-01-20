import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Distributor } from 'src/app/models/distributor';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  product: Product = new Product();

  distributors: Distributor[] = [];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.productService.getDistributors()
    .subscribe(response => this.distributors = response);

    this.activatedRoute.params
    .subscribe(params => {
      let id: number = params['id'];
      if (id){
        this.productService.getProduct(id)
        .subscribe(response => this.product=response);
      }
    })
  }

  createProduct() {
    this.productService.addProduct(this.product)
    .subscribe(response => {
      console.log("product created successfully.");
      this.router.navigate(['/products']);
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.product)
    .subscribe(response => {
      console.log("product updated successfully.");
      this.router.navigate(['/products']);
    });
  }

  compareDistributor(o1: Distributor, o2: Distributor): boolean {
    if (o1 === undefined && o2 === undefined) return true;
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id == o2.id;
  }

}
