import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() count:number;
  @Output() update = new EventEmitter<any>();
  constructor() {    

  }

  ngOnInit() {
    
  }
  //event handler
  increment(){
    this.count ++;
    this.update.emit ({count: this.count})
  }
  decrement(){
    this.count --;
    this.update.emit ({count: this.count})
  }

}
