import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MailServiceService } from '../mail-services/mail-service.service';
declare var $: any;
declare var Expo: any;
declare var TweenMax: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  contactForm: FormGroup;
  constructor(
    private mailService: MailServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
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
  ngAfterViewInit(): void {
    this.jqueryInit();
  }
  onSelect(){
    window.scrollTo(0, 0);
    
  }
  onSubmit() {
    this.mailService.sendMail(this.contactForm.value).subscribe( res => {
      console.log(res);
      if (!res.error) {
        this.contactForm.reset()
        this.router.navigate(['/thankyou']);
      }
    })
  }
  jqueryInit() {
    //Hide Loading Box (Preloader)
    // if ($('.loader-wrap').length) {
    //   $('.loader-wrap').delay(1000).fadeOut(500);
    // }
    // TweenMax.to($('.loader-wrap .overlay'), 1.2, {
    //   force3D: true,
    //   left: '100%',
    //   ease: Expo.easeInOut,
    // });

    // if ($('.preloader-close').length) {
    //   $('.preloader-close').on('click', function () {
    //     $('.loader-wrap').delay(200).fadeOut(500);
    //   });
    // }

    /////////////////////////////
    //Universal Code for All Owl Carousel Sliders
    /////////////////////////////

    // if ($('.theme_carousel').length) {
    //   $('.theme_carousel').each(function (index) {
    //     var $owlAttr = {},
    //       $extraAttr = $(this).data('options');
    //     $.extend($owlAttr, $extraAttr);

    //     $(this).owlCarousel($owlAttr);
    //   });
    // }

    // Main Slider Carousel
    if ($('.banner-carousel').length) {
      $('.banner-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: true,
        margin: 0,
        dots: true,
        nav: true,
        singleItem: true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 9000,
        navText: [
          '<span class="icon-right-arrow"></span>',
          '<span class="icon-right-arrow right"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1024: {
            items: 1,
          },
        },
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
  }
}
