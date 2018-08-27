import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

import { AppComponent } from "./app.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { MaterialModule } from "./material";
import { WidgetGridComponent } from "./components/widget-grid/widget-grid.component";
import { GridsterModule } from 'angular-gridster2';
import { TwitterfeedComponent } from './components/twitterfeed/twitterfeed.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { StockComponent } from './components/stock/stock.component';
import { WorkdayComponent } from './components/workday/workday.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { AutoEmailComponent } from './components/auto-email/auto-email.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { MandatoryComponent } from './components/mandatory/mandatory.component';
import { JiraComponentComponent } from './components/jira-component/jira-component.component';
import { UpMeetingComponent } from './components/up-meeting/up-meeting.component';




import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [AppComponent, ToolbarComponent,UpMeetingComponent,JiraComponentComponent, TodoListComponent, MandatoryComponent, WidgetGridComponent, AutoEmailComponent, BookmarksComponent, TwitterfeedComponent, WeatherWidgetComponent, StockComponent, WorkdayComponent],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule, MaterialModule, GridsterModule, NgxTwitterTimelineModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }