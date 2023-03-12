import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var AOS: any;
@Component({
  selector: 'app-collection-centers',
  templateUrl: './collection-centers.component.html',
  styleUrls: ['./collection-centers.component.css'],
})
export class CollectionCentersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.jqueryInit();
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
