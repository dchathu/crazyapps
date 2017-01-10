import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ApplicationsService} from '../applications.service';
import {IApplication} from './application';

@Component({
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  applications:IApplication[];
  errorMessage:string;

  constructor(private _applicationsService : ApplicationsService) { }

  ngOnInit():void {
    this._applicationsService.getApplications().subscribe(applications => this.applications = applications,
                           error => this.errorMessage = <any>error)
  }

}
