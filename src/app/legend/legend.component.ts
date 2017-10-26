
import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';


import { FACTORS } from './data';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css']
})

export class LegendComponent  {
  FACTORS: any;

  constructor() {
    this.FACTORS = FACTORS;
  }

  getPathValue(val) {
    return "M 0, 0 H " + val;
  }

}


