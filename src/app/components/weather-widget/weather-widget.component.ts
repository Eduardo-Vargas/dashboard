import { Component, OnInit ,AfterViewInit,ElementRef, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})

export class WeatherWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {     
  }

}
