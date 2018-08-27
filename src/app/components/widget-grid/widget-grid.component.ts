import { Component, OnInit } from "@angular/core";
import { GridsterConfig, GridsterItem } from "angular-gridster2";

@Component({
  selector: "app-widget-grid",
  templateUrl: "./widget-grid.component.html",
  styleUrls: ["./widget-grid.component.scss"]
})
export class WidgetGridComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  constructor() { }

  ngOnInit() {
    this.options = {
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };

    this.dashboard = [
      { x: 0, y: 0, rows: 2, cols: 2 },       // 1 Upcoming Events
      { x: 0, y: 2, rows: 2, cols: 2 },       // 2 TO-DO List
      { x: 0, y: 4, rows: 1, cols: 2 },       // 3 JIRA
      { x: 2, y: 0, rows: 3, cols: 2 },       // 4 Mandatory
      { x: 2, y: 3, rows: 2, cols: 1 },       // 5 Workday
      { x: 3, y: 3, rows: 2, cols: 1 },       // 6 Out-of-office mails
      { x: 4, y: 0, rows: 1, cols: 1 },       // 7 Weather x
      { x: 4, y: 1, rows: 1, cols: 1 },       // 8 Stock x
      { x: 4, y: 2, rows: 2, cols: 1 },       // 9 Twitter feed
      { x: 4, y: 4, rows: 1, cols: 1 },       // 10 Bookmarks
    ];
  }
}
