import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jira-component',
  templateUrl: './jira-component.component.html',
  styleUrls: ['./jira-component.component.css']
})
export class JiraComponentComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

}