
import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CommonService } from '../common.service';


import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';


// import { FACTORS } from './data';

import { FactorsData } from  '../data';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css'],
})

export class LegendComponent implements OnInit{

  FACTORS: any;
  value: any;



  // constructor() {
  //   this.FACTORS = FactorsData['last_year'];
  // }


  ngOnInit() {       
  }

  onSubmit(){
    // this method needs to be called when user click on submit button from header
    this.commonService.notifyOther({option: 'onSubmit', value: 'From header'});
    console.log("value",this.value);
  }



  constructor ( private commonService: CommonService ){
    this.FACTORS = FactorsData[this.value];
  }

  getPathValue(val) {
    return "M 0, 0 H " + val;
  }
}


