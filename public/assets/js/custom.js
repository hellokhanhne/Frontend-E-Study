$(function () {
  'use strict';

  //Loader
  $(function preloaderLoad() {
    if ($('.preloader').length) {
      $('.preloader').delay(200).fadeOut(300);
    }
    $('.preloader_disabler').on('click', function () {
      $('#preloader').hide();
    });
  });

  // script navigate

  // Script Show Calling Number
  $('#number').on('click', function () {
    var tel = $(this).data('last');
    $(this)
      .find('span')
      .html('<a href="tel:' + tel + '">' + tel + '</a>');
  });

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Bottom To Top Scroll Script
  $(window).on('scroll', function () {
    var height = $(window).scrollTop();
    if (height > 100) {
      $('#back2Top').fadeIn();
    } else {
      $('#back2Top').fadeOut();
    }
  });

  // Script For Fix Header on Scroll
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $('.header').addClass('header-fixed');
    } else {
      $('.header').removeClass('header-fixed');
    }
  });

  // Property Slide
  $('.reviews-slide').slick({
    slidesToShow: 3,
    arrows: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // location Slide
  $('.slide_items').slick({
    slidesToShow: 3,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  // location Slide
  $('.tutor-slide').slick({
    slidesToShow: 3,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  // Property Slide
  $('.testi-slide').slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // Choose Category
  $('#cates').select2({
    placeholder: 'Choose Category',
    allowClear: true,
  });

  // Choose Currency
  $('#crn').select2({
    placeholder: 'Choose Currency',
    allowClear: true,
  });

  // Currency Position
  $('#psst').select2({
    placeholder: 'Position',
    allowClear: true,
  });

  // Level
  $('#lvl').select2({
    placeholder: 'Choose Level',
    allowClear: true,
  });

  // Select User
  $('#user').select2({
    placeholder: 'Select a User',
    allowClear: true,
  });

  // Select City
  $('#town').select2({
    placeholder: 'Select City',
    allowClear: true,
  });

  // Select Country
  $('#country').select2({
    placeholder: 'Select Country',
    allowClear: true,
  });

  // Select Course
  $('#crss').select2({
    placeholder: 'Choose Course',
    allowClear: true,
  });

  // Language
  $('#lgu').select2({
    placeholder: 'Choose Language',
    allowClear: true,
  });

  // Virification
  $('#yn').select2({
    placeholder: 'Select Option',
    allowClear: true,
  });

  // Video Provider
  $('#vid').select2({
    placeholder: 'Choose Channel',
    allowClear: true,
  });

  // Price
  $('#prc').select2({
    placeholder: 'All',
    allowClear: true,
  });

  // Parent
  $('#prt').select2({
    placeholder: 'Parent',
    allowClear: true,
  });

  // Course Status
  $('#sts').select2({
    placeholder: 'All',
    allowClear: true,
  });

  // Course Instructor
  $('#ins').select2({
    placeholder: 'All',
    allowClear: true,
  });

  // Show
  $('#show').select2({
    placeholder: '10',
    allowClear: true,
  });

  // Home Slider
  $('.home-slider').slick({
    centerMode: false,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
