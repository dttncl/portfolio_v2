import { Component } from '@angular/core';
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
    message : new FormControl('Hey Bernadette! I love what you did here.',Validators.required)
  });

  onSubmit() {
    //console.warn(this.contactForm.value);
    this.emailService.sendEmail(this.contactForm).subscribe(
      response => {
        console.log('Email sent successfully!');
      },
      error => {
        console.log('Error sending email:', error);
      }
    );
  }

}
