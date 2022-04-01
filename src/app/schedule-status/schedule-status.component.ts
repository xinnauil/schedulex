import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SchedulexService } from '../schedulex.service';

@Component({
  selector: 'app-schedule-status',
  templateUrl: './schedule-status.component.html',
  styleUrls: ['./schedule-status.component.scss']
})
export class ScheduleStatusComponent implements OnInit {

  range: FormGroup; 

  constructor(
    private service: SchedulexService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.range = new FormGroup({
      startTime: new FormControl(),
      endTime: new FormControl(),
    });

    console.log(this.service.getAuthToken());
  }

  // ownerUUID= payload['ownerUUID'],
  // ownerEmail= payload['ownerEmail'],
  // token = payload['token'],
  // start_time=datetime_str_to_obj(payload['start_time']),
  // end_time=datetime_str_to_obj(payload['end_time']),
  // status = payload['status']
  public submit(): void {
    console.log(this.range.value);
    const payload = {
      ownerUUID: "1234",
      ownerEmail: "xinnliu@cisco.com",
      token: this.service.getAuthToken(),
    }
    this.service.scheduleStatusChange(payload)
  }

}
