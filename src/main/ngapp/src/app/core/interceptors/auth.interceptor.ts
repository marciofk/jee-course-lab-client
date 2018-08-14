import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header (fake value is shown here)
    const authHeader = localStorage.getItem("token") == null ? "none" : localStorage.getItem("token");
    console.log("auth from the local storage" + authHeader);
    const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
    console.log('auth interceptor');
    return next.handle(authReq);
  }
}
