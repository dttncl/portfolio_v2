import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailUrl = 'http://localhost:3000/send-email'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  sendEmail(contactForm : FormGroup) {
    const data = {
      name : contactForm.get('name')?.value,
      email: contactForm.get('email')?.value,
      subject: contactForm.get('subject')?.value,
      message: contactForm.get('message')?.value
    };

    console.log(data)

    return this.http.post(this.emailUrl, data);
  }

}
