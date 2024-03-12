import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailUrl = 'https://api.web3forms.com/submit'; 
/*
  constructor(private http: HttpClient) { }

  
  sendEmail(data : any) {
    
    
    const data = {
      name : contactForm.get('name')?.value,
      email: contactForm.get('email')?.value,
      subject: contactForm.get('subject')?.value,
      message: contactForm.get('message')?.value,
      access_key: "7200e0e6-f4c8-42fa-9a8c-bda32f224266"
    };
    
    
    console.log(data)

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.post(this.emailUrl, data, { headers: headers });
  }
  */
  
  async sendEmail(data : FormGroup) {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    const urlencoded = new URLSearchParams();
    urlencoded.append("access_key", "7200e0e6-f4c8-42fa-9a8c-bda32f224266");
    urlencoded.append("name", "Bernadette");
    urlencoded.append("email", "dette@363@gmail.com");
    urlencoded.append("subject", "Hehe");
    urlencoded.append("message", "Hehe"); 

    const response = await fetch(this.emailUrl, {
      method: 'POST',
      body: urlencoded,
      headers: myHeaders
    });

    return await response.json();
  }
  


}
