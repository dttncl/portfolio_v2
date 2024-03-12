import { Component, EnvironmentInjector } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.sass'
})
export class ContactMeComponent {

  constructor(private emailService: EmailService) {}

  contactForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl('',Validators.required),
    subject : new FormControl('Awesome Website',Validators.maxLength(20)),
    message : new FormControl('Hey Bernadette! I love what you did here.',Validators.required),
    access_key : new FormControl('7200e0e6-f4c8-42fa-9a8c-bda32f224266')
  });

  onSubmit() {
    /*
    const data = {
      access_key: '7200e0e6-f4c8-42fa-9a8c-bda32f224266',
      name: this.contactForm.get('name')!.value!,
      email: this.contactForm.get('email')!.value!,
      subject: this.contactForm.get('subject')!.value!,
      message: this.contactForm.get('message')!.value!,
    };
    */

    let data = this.contactForm;
    console.log(this.emailService.sendEmail(data));
    
  }

  /*
  onSubmit() {
    const data = {
      name: this.contactForm.get('name')!.value!,
      email: this.contactForm.get('email')!.value!,
      subject: this.contactForm.get('subject')!.value!,
      message: this.contactForm.get('message')!.value!,
      access_key: '7200e0e6-f4c8-42fa-9a8c-bda32f224266'
    };
  
    console.log(data);

    this.emailService.sendEmail(data).subscribe(
      response => {
        console.log(response);
        console.log('Email sent successfully!');
      },
      error => {
        console.log('Error sending email:', error);
      }
    );
  }
  */

}
