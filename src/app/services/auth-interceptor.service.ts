import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '@services/auth.service';
import {StartsWithHttp} from '@services/url-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addToken(req));
  }

  private addToken(req: HttpRequest<any>): HttpRequest<any> {
    const headers =
      this.auth.isAuthed && !req.context.get(StartsWithHttp) ?
        req.headers.set('Authorization', `Bearer ${this.auth.isAuthed}`) :
        req.headers;
    return req.clone({headers});
  }
}
