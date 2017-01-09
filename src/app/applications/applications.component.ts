import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  applications;
  constructor() { }

  ngOnInit() {
    this.applications=[
      {
        appName:'App 1',
        appId:1,
        thumbnailUrl:'http://poratalks.info/inc/img/44.jpg'
      },
      {
        appName:'App 2',
        appId:1,
        thumbnailUrl:'http://poratalks.info/inc/img/45.jpg'
      },
      {
        appName:'App 3',
        appId:1,
        thumbnailUrl:'http://poratalks.info/inc/img/19.jpg'
      }
    ];
  }

}
