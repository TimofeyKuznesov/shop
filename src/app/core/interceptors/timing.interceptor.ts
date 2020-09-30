import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpEventType, HttpParams, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let cloneRequest = request;
    if (request.url.includes('orders')) {
      cloneRequest = request.clone({
        params: new HttpParams()
          .set('start_request', Date.now().toString())
      });
    }
    return next.handle(cloneRequest).pipe(
      filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
      tap( (event: HttpResponse<any>) => {
        const url = new URL(event.url);
        const startRequest = url.searchParams.get('start_request');
        if (startRequest) {
          const requestTime = Date.now() - +startRequest;
          console.log(`Request's ${url.pathname} time is ${requestTime} ms.`);
        }
      })
    );
  }
}
