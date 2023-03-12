import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MailServiceService } from '../mail-services/mail-service.service';

declare var $: any;
declare var AOS: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(
    private mailService: MailServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jqueryInit();
    this.contactForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/),
        Validators.email,
      ]),
      phone: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.mailService.sendMail(this.contactForm.value).subscribe( res => {
      console.log(res);
      if (!res.error) {
        this.contactForm.reset()
        this.router.navigate(['/thankyou']);
      }
    })
  }

  get contactFormControl() {
    return this.contactForm.controls;
  }

  jqueryInit() {
    // AOS Animation
    if ($('[data-aos]').length) {
      AOS.init({
        duration: '1000',
        disable: 'false',
        easing: 'ease',
        mirror: true,
      });
    }

    if ($('.paroller').length) {
      $('.paroller').paroller({
        factor: -0.1, // multiplier for scrolling speed and offset, +- values for direction control
        factorLg: -0.1, // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control
        type: 'foreground', // background, foreground
        direction: 'vertical', // vertical, horizontal
      });
    }
  }
}
