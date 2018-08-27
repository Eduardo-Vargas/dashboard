import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-up-meeting',
  templateUrl: './up-meeting.component.html',
  styleUrls: ['./up-meeting.component.css']
})
export class UpMeetingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
