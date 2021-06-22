import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-increament',
  templateUrl: './quantity-increament.component.html',
  styleUrls: ['./quantity-increament.component.css']
})
export class QuantityIncreamentComponent implements OnInit {


  noOfClicks:number[]=[];
  count: number =1;
  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
    this.noOfClicks.push(this.count++);
  }
}
