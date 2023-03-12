import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  constructor(private http: HttpClient) { }

  sendMail(data:any) {
    return this.http.post < {
      error: boolean,
      message:string
    } > (`${environment.baseUrl}/api/submit`,data)
  }
}
