import { Component, OnInit } from '@angular/core';
import { SchedulexService } from './schedulex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'schedulex';
  showFiller = false;
  token; 
  accessToken;

  constructor(
    private service: SchedulexService,
  ) { 
  }

  
  ngOnInit(): void {
    console.log("in app component");
    const fullUrl = window.location.href;
    this.token = window.location.href.substring(
      fullUrl.indexOf("=") + 1, 
      fullUrl.lastIndexOf("&")
    );

    this.service.getToken(this.token).subscribe(
      x => {
        this.accessToken = x.access_token;
        console.log("My app component access token is: " + x.access_token);
        this.service.setAuthToken(this.accessToken);
      }
    )  
  }

}
