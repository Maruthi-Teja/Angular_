import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-selector',
  templateUrl: './query-selector.component.html',
  styleUrls: ['./query-selector.component.css']
})
export class QuerySelectorComponent implements OnInit {
  
  count:number=0;

  Dec(){
   this.count--;
  }
  Inc(){

    this.count++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
