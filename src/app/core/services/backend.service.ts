import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, share, tap } from 'rxjs/operators';

import { OrderModel } from 'src/app/orders/models/order';

import { ProductModel } from 'src/app/products/models';

import { AppConfigModel } from '../model';

import { APP_CONFIG_TOKEN } from './app-config.factory';

@Injectable({
  providedIn: 'root'
})

export class BackendService {


  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG_TOKEN) private appConfig: AppConfigModel) { }

  getProducts() {
    return this.httpClient.get(this.appConfig.productsUrl).toPromise()
      .then(response => response as Array<ProductModel>)
      .catch(this.handleError);
  }

  getProduct(id: number | string){
    return this.httpClient.get(`${this.appConfig.productsUrl}/${id}`).toPromise()
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }
  addProduct(product: ProductModel) {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const body = JSON.stringify(product);
    return this.httpClient.post(this.appConfig.productsUrl, body, options).toPromise()
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }

  updateProduct(product: ProductModel) {
    if (!product.id) {
      return this.addProduct(product);
    }
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const body = JSON.stringify(product);
    return this.httpClient.put(`${this.appConfig.productsUrl}/${product.id}`, body, options).toPromise()
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }

  delProduct(product: ProductModel) {
    return this.httpClient.delete(`${this.appConfig.productsUrl}/${product.id}`).toPromise()
    .then(response => response as ProductModel)
    .catch(this.handleError);
  }

  getOrders() {
    return this.httpClient.get<Array<OrderModel>>(this.appConfig.ordersUrl)
      .pipe(
        share(),
        catchError(this.handleErrorObserver)
      );
  }

  addOrder(order: OrderModel) {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const body = JSON.stringify(order);
    console.log(body);
    return this.httpClient.post(this.appConfig.ordersUrl, body, options)
      .pipe(
        map(response => response as OrderModel),
        catchError(this.handleErrorObserver)
      );
  }

  delOrder(order: OrderModel) {
    return this.httpClient.delete(this.appConfig.ordersUrl + '/' + order.id)
    .pipe(
      tap(response => {console.log(response); }),
        catchError(this.handleErrorObserver)
    );
  }

  handleError(error: { message: string }) {
    console.log('Error load data');
    return Promise.reject(error.message);
  }
  handleErrorObserver(error: { message: string }) {
    console.log('Error load data');
    return throwError(error);
  }
}
