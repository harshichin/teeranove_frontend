import { Component, OnInit } from '@angular/core';
// import { AOS } from '../../assets/js/aos.js';
declare var $: any;
declare var AOS:any
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  constructor() {}

  selectedService = 1
  ngOnInit(): void {
    this.jqueryInit();
  }

  onSelect(service:any){
    window.scrollTo(0, 0);
    this.selectedService = service
  }
  jqueryInit() {
    if ($('.accordion-box').length) {
      $(".accordion-box").on('click', '.acc-btn', function () {
  
          var outerBox = $(this).parents('.accordion-box');
          var target = $(this).parents('.accordion');
  
          if ($(this).hasClass('active') !== true) {
              $(outerBox).find('.accordion .acc-btn').removeClass('active');
          }
  
          if ($(this).next('.acc-content').is(':visible')) {
              return false;
          } else {
              $(this).addClass('active');
              $(outerBox).children('.accordion').removeClass('active-block');
              $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
              target.addClass('active-block');
              $(this).next('.acc-content').slideDown(300);
          }
      });
  }
  
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
