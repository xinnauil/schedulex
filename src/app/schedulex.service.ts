import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulexService {

  public accessTokenUrl = "https://webexapis.com/v1/access_token";
  
  constructor(
    private http: HttpClient,
  ) { 

  }

  getRooms(): Observable<any> {
    return of([
      {roomId: "123"},
      {roomId: "1234"}
    ])
  } 

  getToken(code: string): Observable<any> {
    let options = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${code}`
      });


    const payload = new HttpParams()
          .set('grant_type', "authorization_code")
          .set('client_id', "C99d3363ab4b9adddb8d99c1c37831ed59062daeac8d2c818b59df973b7501716")
          .set('client_secret', "047f6282ab7c2da8be13516928f29e57b0b2674b5aab004bd3cdafab627e7d38")
          .set('code', code)
          .set('redirect_uri', "https://xinnauil.github.io/schedulex/");
          ;
    return this.http.post<any>(this.accessTokenUrl, payload,  
       { headers: options });
  }
}
