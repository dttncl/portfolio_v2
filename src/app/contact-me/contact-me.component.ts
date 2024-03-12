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

  displayStatus : string = "";

  constructor(private emailService: EmailService) {}

  contactForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl('',Validators.required),
    subject : new FormControl('Awesome Website',Validators.maxLength(20)),
    message : new FormControl('Hey Bernadette! I love what you did here.',Validators.required),
    access_key : new FormControl('7200e0e6-f4c8-42fa-9a8c-bda32f224266')
  });

  onSubmit() {
    let data = this.contactForm;
    this.emailService.sendEmail(data);

    this.contactForm.reset({
      subject : 'Awesome Website',
      message : 'Hey Bernadette! I love what you did here.',
      access_key : '7200e0e6-f4c8-42fa-9a8c-bda32f224266'
    });

    this.displayStatus = "Submitted Successfully!";
  }

}
