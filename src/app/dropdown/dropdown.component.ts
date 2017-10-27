import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
 
import { CommonService } from '../common.service';
import { Time } from './time';
import { FactorsData } from '../data';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styles: ['SELECT { margin-bottom: 20px;'],
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor( private commonService: CommonService ){
  }

  selectedDay: string = '';



  

  //event handler for the select element's change event
  public selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
    console.log("selectedDay", this.selectedDay);
  }

  ngOnInit() {
    this.subscription = this.commonService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'onSubmit') {
        console.log(res.value);
        // perform your other action from here
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}


