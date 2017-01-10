import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IApplication } from './applications/application';

@Injectable()
export class ApplicationsService {
    private _applicationsUrl = 'api/applications/applications.json';

    constructor(private _http: Http) { }

    getApplications(): Observable<IApplication[]> {
        return this._http.get(this._applicationsUrl)
            .map((response: Response) => <IApplication[]> response.json())
            .catch(this.handleError);
    }

    getApplication(id: number): Observable<IApplication> {
        return this.getApplications()
            .map((applications: IApplication[]) => applications.find(a => a.appId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
