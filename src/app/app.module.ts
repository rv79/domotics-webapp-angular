import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ClockService} from './service/clock.service';
import {GrowlService} from './service/growl.service';
import {MaterialModule} from './material.module';
import {ToasterModule} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GrowlComponent} from './growl/growl.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AngularDraggableModule} from 'angular2-draggable';
import {DrawService} from './service/draw.service';


@NgModule({
  declarations: [
    AppComponent,
    GrowlComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToasterModule,
    MaterialModule,
    AngularDraggableModule
  ],
  providers: [
    ClockService,
    GrowlService,
    DrawService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
