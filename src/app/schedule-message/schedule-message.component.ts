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
  rooms: any[]; 
  selectedValue: any;
  scheduleMessageForm: FormGroup; 
  token: string; 
  accessToken: string; 
  me: any; 

  constructor(
    private service: SchedulexService,
    private fb: FormBuilder,
  ) { 
  }


  ngOnInit(): void {
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

    // this.service.getToken(this.token).subscribe(
    //   x => {
    //     this.accessToken = x.access_token;
    //     console.log("My access token is: " + x.access_token);
    //     this.service.setAuthToken(this.accessToken); 
    //     this.service.getRooms(this.accessToken).subscribe(
    //       rooms => {
    //         console.log(rooms);
    //         this.rooms = rooms;
    //       }
    //     )
    //   }
    // )


    this.service.getRooms(this.service.getAuthToken()).subscribe(
      rooms => {
        console.log(rooms);
        this.rooms = rooms;
      }
    )


    // this.service.getRooms(this.accessToken).subscribe(
    //   rooms => {
    //     console.log(rooms);
    //     this.rooms = rooms;
    //   }
    // )
    
    // if (this.accessToken) {
    //   this.service.getMe(this.accessToken).subscribe(
    //     x => {
    //       console.log("me details:"); 
    //       console.log(x);
    //     }
    //   )
    // }

    
  }

  public submit(): void {
    console.log(this.scheduleMessageForm.value);
    const payload = {
      roomId: this.scheduleMessageForm.value.space,
      ownerEmail: 'xinnliu@cisco.com',
      token: this.accessToken,
      send_time: this.scheduleMessageForm.value.time,
      text: this.scheduleMessageForm.value.message,
    }
    this.service.scheduleMessage(
      payload
    ).subscribe(
    )
  }
}
