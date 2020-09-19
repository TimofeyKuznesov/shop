import { Component, OnInit } from '@angular/core';

import {Categories} from './categories.enum';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: Categories;
  isAvailable: boolean;
  constructor() { }

  ngOnInit() {
  }

}
