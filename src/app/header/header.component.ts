import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.jqueryInit();
  }
  goTop() {
    //Menu Toggle Btn
    this.mobile = '';
    window.scrollTo(0, 0);
    console.log(this.mobile);
  }

  jqueryInit() {
    //Search Popup
    if ($('#search-popup').length) {
      //Show Popup
      $('.search-toggler').on('click', function () {
        $('#search-popup').addClass('popup-visible');
      });
      $(document).keydown(function (e) {
        if (e.keyCode === 27) {
          $('#search-popup').removeClass('popup-visible');
        }
      });
      //Hide Popup
      $('.close-search,.search-popup .overlay-layer').on('click', function () {
        $('#search-popup').removeClass('popup-visible');
      });
    }

    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
      $('.main-header .navigation li.dropdown').append(
        '<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>'
      );
    }

    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {
      $('.mobile-menu .menu-box1').mCustomScrollbar();

      var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
      $('.mobile-menu .menu-box1 .menu-outer').append(mobileMenuContent);
      $('.sticky-header .main-menu').append(mobileMenuContent);

      //Dropdown Button
      $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
        $(this).toggleClass('open');
        $(this).prev('ul').slideToggle(500);
      });

      //Dropdown Button
      $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
        $(this).prev('.megamenu').slideToggle(900);
      });

      // //Menu Toggle Btn
      // $('.mobile-nav-toggler').on('click', function () {
      //   $('body').addClass('mobile-menu-visible');
      // });

      // //Menu Toggle Btn
      // $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn1').on(
      //   'click',
      //   function () {
      //     $('body').removeClass('mobile-menu-visible');
      //   }
      // );
    }
  }

  mobile: string = '';
  onClick() {
    this.mobile = 'mobile-menu-visible';
    console.log(this.mobile);
  }
  dropdown= true
  onDropdown(){
    this.dropdown = !this.dropdown
  }

  ngOnChanges() {
    console.log('changes');
  }

  ngOnChange() {
    $('.mobile-nav-toggler').on('click', function () {
      $('body').addClass('mobile-menu-visible');
    });
  }
}
