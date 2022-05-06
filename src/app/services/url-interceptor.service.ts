import { Injectable } from '@angular/core';
import {HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

export const StartsWithHttp = new HttpContextToken<boolean>(() => false);

@Injectable({
  providedIn: 'root'
})
export class UrlInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(
      req.clone({
        url:
          req.url.startsWith('http') ||
          req.url.startsWith('/') ||
          req.context.get(StartsWithHttp)
            ? req.url :
            [environment.apiUrl, req.url].join('/')
      })
    );
  }
}
