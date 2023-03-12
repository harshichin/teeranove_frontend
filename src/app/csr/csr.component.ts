import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csr',
  templateUrl: './csr.component.html',
  styleUrls: ['./csr.component.css']
})
export class CsrComponent implements OnInit {

  constructor() { 
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
  }

}
