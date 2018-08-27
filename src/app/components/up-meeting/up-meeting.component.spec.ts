import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpMeetingComponent } from './up-meeting.component';

describe('UpMeetingComponent', () => {
  let component: UpMeetingComponent;
  let fixture: ComponentFixture<UpMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
