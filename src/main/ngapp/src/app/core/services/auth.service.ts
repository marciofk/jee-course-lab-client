import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IUserLogin } from '../../shared/interfaces';

import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

    localApiServer : string = environment.localApiServer;
    authUrl = this.localApiServer + '/api/auth';
    isAuthenticated = false;
    redirectUrl: string;
    @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private http: HttpClient) { }

    private userAuthChanged(status: boolean) {
       this.authChanged.emit(status); // Raise changed event
    }

    login(userLogin: IUserLogin): Observable<boolean> {
        const body = new HttpParams()
            .set('email',userLogin.email)
            .set('password',userLogin.password);

        var authorization:string;

        return this.http.post<boolean>(this.authUrl + '/login', body.toString(),
                            {
                               headers: new HttpHeaders()
                                    .set('Content-type','application/x-www-form-urlencoded'),
                                    withCredentials:true,
                                    observe: 'response'
                            })
            .pipe(
                map(res => {
                    authorization = res.headers.get('Authorization');
                    this.isAuthenticated = res.body as boolean;
                    this.userAuthChanged(res.body as boolean);
                    console.log("authenticated? " + this.isAuthenticated +
                        " Authorization: " + authorization);

                    localStorage.setItem("token",authorization);

                    return res.body as boolean;
                }),
                catchError(this.handleError)
            );
    }

    logout(): Observable<boolean> {
        return this.http.post<boolean>(this.authUrl + '/logout', null)
            .pipe(
                map(loggedOut => {
                    this.isAuthenticated = !loggedOut;
                    this.userAuthChanged(!loggedOut); // Return loggedIn status
                    return loggedOut;
                }),
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Server error');
    }

}
