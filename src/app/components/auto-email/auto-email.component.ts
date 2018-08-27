import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-auto-email',
  templateUrl: './auto-email.component.html',
  styleUrls: ['./auto-email.component.css']
})
export class AutoEmailComponent implements OnInit {

  APPLICATION_CONFIG = {
    clientID: "f6d97fdc-1071-4748-aa67-553cc73eb64d",
    redirectUri: "http://localhost:4200/",
    interactionMode: "popUp",
    graphEndpoint: "https://graph.microsoft.com/v1.0/me",
    graphScopes: ["user.read mail.send"]
};


isChecked = false;
formGroup: FormGroup;
enableDis = "Enable AutoReply";

constructor(formBuilder: FormBuilder) {
  this.formGroup = formBuilder.group({
    enableEmail: false,
  });
}

onFormSubmit() {
  if(this.formGroup.value.enableEmail) {
    alert("Auto Reply settings enabled");
  }
  else {
    alert("Auto Reply settings disabled");
  }
}

  ngOnInit() {
  
  }

  onChange(){
    if(this.isChecked) {
      this.enableDis = "Disable AutoReply";
    }
    else {
      this.enableDis = "Enable AutoReply";
    }
  }
  

  
}
