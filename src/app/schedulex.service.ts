import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SchedulexService {

  public accessTokenUrl = "https://webexapis.com/v1/access_token";
  
  public token; 

  constructor(
    private http: HttpClient,
  ) { 

  }

  // getRooms(): Observable<any> {
  //   return of([
  //     {roomId: "123"},
  //     {roomId: "1234"}
  //   ])
  // } 

  setAuthToken(code: string): void {
    this.token = code; 
  }

  getAuthToken(): any | undefined {
    return this.token;     
  }

  getToken(code: string): Observable<any> {
    let options = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${code}`
      });


    const payload = new HttpParams()
          .set('grant_type', "authorization_code")
          .set('client_id', "Cec0bf64fe00181d81c13ee98819fc26dd3e43573007293a61af430464ef2f00f")
          .set('client_secret', "e8bbca2d7ecb1b7d2e0a2932fe07dcf7d431cd1a8803e6e39253c6bafcfb27ff")
          .set('code', code)
          .set('redirect_uri', "https://xinnauil.github.io/schedulex/");
          ;
    return this.http.post<any>(this.accessTokenUrl, payload,  
       { headers: options });
  }

  getMe(token: string): Observable<any> {
    let options = new HttpHeaders({
        Authorization: `Bearer ${token}`
    });

    const meUrl = 'https://identity.webex.com/identity/scim/v1/Users/me'; 
    return this.http.get<any>(meUrl,  
      { headers: options });
  }

  getRooms(token?: string): Observable<any> {
    let roomsUrl = "https://webexapis.com/v1/rooms?sortBy=lastactivity";
    console.log(token);
    let options = new HttpHeaders({
      Authorization: `Bearer ${token}`
  });
    return this.http.get<any>(roomsUrl,  
      { headers: options }).pipe(
        map (
          room => room.items
        )
      );
  }

  scheduleMessage(payload: any): Observable<any> {
    let local = "127.0.0.1:5000/scheduleMessageAPI";
    return this.http.post<any>(local, payload);
  } 

  scheduleStatusChange(payload: any): Observable<any> {
    let local = "127.0.0.1:5000/scheduleStatusChange";
    return this.http.post<any>(local, payload);
  } 
}
