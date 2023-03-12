import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MailServiceService } from '../mail-services/mail-service.service';
@Component({
  selector: 'app-request-pickup',
  templateUrl: './request-pickup.component.html',
  styleUrls: ['./request-pickup.component.css']
})
export class RequestPickupComponent implements OnInit {
  contactForm: FormGroup;
  constructor(
    private mailService: MailServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
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
}
