import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count = 0;

  isMinusButtonVisible = this.count < 0 ? false : true;

  isPlusButtonVisible = this.count > 10 ? false : true;

  numberBackgroundColor: string = 'white';

  constructor() { }

  ngOnInit(): void {
  }

  addByOne(): void {
    this.count++;
    if (this.count >= 0 && this.count <= 10) {
      this.isMinusButtonVisible = true;
      this.numberBackgroundColor = 'white';
    }
    if (this.count > 10) {
      this.isPlusButtonVisible = false;
      this.numberBackgroundColor = 'red';
    }
  }

  reduceByOne(): void {
    this.count--;
    if (this.count < 0) {
      this.isMinusButtonVisible = false;
      this.numberBackgroundColor = 'green';
    }
    if (this.count <= 10 && this.count >= 0) {
      this.isPlusButtonVisible = true;
      this.numberBackgroundColor = 'white';
    }
  }

  resetCount(): void {
    this.count = 0;
    this.numberBackgroundColor = 'white';
    this.isPlusButtonVisible = true;
    this.isMinusButtonVisible = true;
  }
}
