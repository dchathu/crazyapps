import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IApplication } from './application';
import { ApplicationsService } from '../applications.service';

@Component({
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit,OnDestroy {
    pageTitle: string = 'App Detail';
    application: IApplication;
    errorMessage: string;
    private sub: Subscription;

  constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _applicationsService: ApplicationsService) { }

  ngOnInit() : void{
    this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getApplication(id);
        });
  }

   ngOnDestroy() {
        this.sub.unsubscribe();
    }

  getApplication(id: number) {
        this._applicationsService.getApplication(id).subscribe(
            application => this.application = application,
            error => this.errorMessage = <any>error);
    }

}
