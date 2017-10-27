import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Factor, FactorsData } from  './data';


@Injectable()
export class CommonService {

  private notify = new Subject<any>();


  notifyObservable$ = this.notify.asObservable();

  constructor(){}

  public notifyOther(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }
}
