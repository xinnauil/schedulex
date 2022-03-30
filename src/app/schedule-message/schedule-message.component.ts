import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SchedulexService } from '../schedulex.service';

@Component({
  selector: 'app-schedule-message',
  templateUrl: './schedule-message.component.html',
  styleUrls: ['./schedule-message.component.scss']
})
export class ScheduleMessageComponent implements OnInit {

  range: FormGroup; 
  rooms: Observable<any>; 
  selectedValue: any;
  scheduleMessageForm: FormGroup; 
  token: string; 
  accessToken: string; 

  constructor(
    private service: SchedulexService,
    private fb: FormBuilder,
  ) { 
  }


  ngOnInit(): void {
    this.rooms = this.service.getRooms();
    this.range = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
    

    this.scheduleMessageForm = this.fb.group({
      space: [''],
      message: [''],
      range: this.range,
      time: '',
    })

    console.log(this.range.value)
    const fullUrl = window.location.href;
    this.token = window.location.href.substring(
      fullUrl.indexOf("=") + 1, 
      fullUrl.lastIndexOf("&")
    );

    this.service.getToken(this.token).subscribe(
      x => {
        this.accessToken = x.access_token;
        console.log("My access token is: " + x.access_token);
      }
    )
    
  }

  public submit(): void {
    console.log(this.scheduleMessageForm.value);
  }
}
