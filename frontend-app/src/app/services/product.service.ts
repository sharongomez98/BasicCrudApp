import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Distributor } from '../models/distributor';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = 'http://localhost:8080/api/';
  product: string = 'product/';
  distributor: string = 'distributor/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url + this.product);
  }

  getDistributors(): Observable<Distributor[]>{
    return this.http.get<Distributor[]>(this.url + this.distributor);
  }

  getProduct(id: number): Observable<Product>{
    return this.http.get<Product>(this.url + this.product + id);
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.url + this.product, product);
  }

  updateProduct(product: Product): Observable<Product>{
    return this.http.put<Product>(this.url + this.product + product.id, product);
  }

  removeProduct(id: number): Observable<any>{
    return this.http.delete<any>(this.url + this.product + id);
  }
}
