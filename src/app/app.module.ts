import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ApplicationsComponent } from './applications/applications.component';
import {ApplicationsService} from './applications.service';
import { ApplicationDetailComponent } from './applications/application-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ApplicationsComponent,
    ApplicationDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'apps', component: ApplicationsComponent },
      { path: 'apps/:id',component: ApplicationDetailComponent },
      { path: '', redirectTo: 'apps', pathMatch: 'full' },
      { path: '**', redirectTo: 'apps', pathMatch: 'full' }
    ]),
  ],
  providers: [ApplicationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
