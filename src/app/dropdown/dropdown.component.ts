import { Component, OnInit } from '@angular/core';
import { Time } from './time';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styles: ['SELECT { margin-bottom: 20px;'],
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  constructor() { }

  selectedDay: string = '';

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }



}


