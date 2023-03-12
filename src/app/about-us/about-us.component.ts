import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var AOS: any;
declare var Swiper: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  constructor() {
    window.scrollTo(0, 0);
  }

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

    /////////////////////////////
    //Universal Code for All Owl Carousel Sliders
    /////////////////////////////

    if ($('.theme_carousel').length) {
      $('.theme_carousel').each(function (index) {
        var $owlAttr = {},
          $extraAttr = $(this).data('options');
        $.extend($owlAttr, $extraAttr);

        $(this).owlCarousel($owlAttr);
      });
    }

    //  Partner Carousel
    if ($('.partner-carousel').length) {
      $('.partner-carousel').owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: false,
        stagePadding: 0,
        singleItem: true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 6000,
        navText: [
          '<span class="flaticon-next left"></span>',
          '<span class="flaticon-next right"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          500: {
            items: 2,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
          },
          1200: {
            items: 4,
          },
          1300: {
            items: 5,
          },
        },
      });
    }

//  Testimonial Style2 Carousel
if ($('.testimonial-style2__carousel').length) {
  $('.testimonial-style2__carousel').owlCarousel({
      loop: true,
      margin: 30,
      dots: true,
      nav: false,
      stagePadding: 0,
      singleItem: true,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 6000,
      navText: ['<span class="flaticon-next left"></span>', '<span class="flaticon-next right"></span>'],
      responsive: {
          0: {
              items: 1
          },
          500: {
              items: 1
          },
          768: {
              items: 1
          },
          992: {
              items: 1
          },
          1200: {
              items: 1
          },
          1300: {
              items: 1
          }
      }
  });
}

  }
}
