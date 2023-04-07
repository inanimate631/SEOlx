import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private readonly apiUrl = 'http://localhost:3000/send-email';

  constructor(private http: HttpClient) {}

  sendEmail(emailData: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    return this.http.post<any>(this.apiUrl, JSON.stringify(emailData), options);
  }
}
