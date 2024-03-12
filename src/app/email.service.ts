import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailUrl = 'https://api.web3forms.com/submit'; 
  
  async sendEmail(data : FormGroup) {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type","application/x-www-form-urlencoded");
    
    const urlencoded = new URLSearchParams();
    urlencoded.append("access_key", "7200e0e6-f4c8-42fa-9a8c-bda32f224266");
    urlencoded.append("name", data.get("name")!.value);
    urlencoded.append("email", data.get("email")!.value);
    urlencoded.append("subject", data.get("subject")!.value);
    urlencoded.append("message", data.get("message")!.value); 

    const response = await fetch(this.emailUrl, {
      method: 'POST',
      body: urlencoded,
      headers: myHeaders
    });
    
    return response.status;
  }

}
