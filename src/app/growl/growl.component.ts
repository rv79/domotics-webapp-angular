import { Component, OnInit } from '@angular/core';
import {ToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'app-growl',
  templateUrl: './growl.component.html',
  styleUrls: ['./growl.component.css']
})
export class GrowlComponent implements OnInit {

  public toasterconfig: ToasterConfig;

  constructor() {
    this.toasterconfig = new ToasterConfig(
      {
        timeout: {error: 0, success: 2000, warning: 5000},
        animation: 'fade',
        showCloseButton: {'success': true, 'error': true, 'warning': true},
        mouseoverTimerStop: true
      });

  }

  ngOnInit() {
  }
}
