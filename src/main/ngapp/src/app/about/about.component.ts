import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Component({
    selector: 'cm-about',
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

    labContent:string;
    localApiServer : string = environment.localApiServer;
    url:string = this.localApiServer + '/api/custom-about';

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.http.get(this.url, { responseType: 'text' }).subscribe(res => {
            this.labContent = res;
          });
    }

}
