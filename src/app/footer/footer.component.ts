import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}
  subscribeForm: FormGroup;
  ngOnInit(): void {
    this.subscribeForm = new FormGroup({
      emailId: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/),
        Validators.email,
      ]),
    });
  }
  goTop() {
    window.scrollTo(0, 0);
  }
  onSubscribe(){
    console.log(this.subscribeForm.value);
    
  }
}
