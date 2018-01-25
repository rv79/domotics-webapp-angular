import { Injectable } from '@angular/core';
import {ToasterService} from 'angular2-toaster';

@Injectable()
export class GrowlService {

  constructor(private toasterService: ToasterService) { }

  popError(message: string) {
    this.toasterService.pop('error', null, message);
  }

  popSuccess(message: string) {
    this.toasterService.pop('success', null, message);
  }

}
