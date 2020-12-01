// Preloader js
$(window).on('load', function () {
  $('.preloader').fadeOut(100);
});

function concatValues(obj) {
  var value = '';
  for (var prop in obj) {
    value += obj[prop];
  }
  return value;
}

(function ($) {
  ('use strict');

  // Initiate the wowjs animation library
  new WOW().init();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1500,
      'easeInOutExpo'
    );
    return false;
  });

  $('.sidebar-collapse').click(function () {
    if ($('#sidebar').hasClass('sidebar-close')) {
      $('.sidebar').addClass('sidebar-open');
      $('.sidebar').removeClass('sidebar-close');
    } else {
      $('.sidebar').toggleClass('sidebar-collapsed');
    }
  });

  $('.sidebar__close').click(function () {
    $('.sidebar').addClass('sidebar-close');
    $('.sidebar').removeClass('sidebar-open');
  });

  var layout = 'masonry';
  if ($('.filter').hasClass('vertical')) {
    layout = 'vertical';
  }
  var $grid = $('.filter').isotope({
    // options
    itemSelector: '.filter-item',
    layoutMode: layout,
  });

  var filters = {};
  function filter_var(event) {
    var $button = $(event.currentTarget);
    // get group key
    var $buttonGroup = $button.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[filterGroup] = $button.attr('data-filter');
    // combine filters
    // console.log(filters);
    var filterValue = concatValues(filters);
    // set filter for Isotope
    $grid.isotope({ filter: filterValue });
  }

  var hash = window.location.hash;

  // do some validation on the hash here

  hash && $('ul.nav a[href="' + hash + '"]').tab('show');

  $('.filters-btn').on('click', '.button', filter_var);
  $('.is-checked').click();
  $('.tab-pane.active').find('.is-checked').first().click();

  $('.nav-pills a').click(function () {
    $(this).tab('show');
    var tab_id = $(this).attr('href');
    $(tab_id).find('.is-checked').click();
    $(tab_id).find('.nav-pills a.active').click();
  });

  // change is-checked class on buttons
  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

  $('.venobox').venobox({
    spinner: 'cube-grid',
    titleBackground: '#d2d2d2',
    titleColor: '#161617',
    titlePosition: 'top',
    numeratio: true,
    spinColor: '#d2d2d2',
  });

  var $numberofSlides = $('.carousel-item').length;
  var $currentSlide = Math.floor(Math.random() * $numberofSlides);
  var $item = $('.carousel-item');

  $('.carousel-indicators li').each(function () {
    var $slideValue = $(this).attr('data-slide-to');
    if ($currentSlide == $slideValue) {
      $(this).addClass('active');
      $item.eq($slideValue).addClass('active');
    } else {
      $(this).removeClass('active');
      $item.eq($slideValue).removeClass('active');
    }
  });

  $('#compact').click(function () {
    $('.card__publications').each(function () {
      $(this).toggleClass('compact');
      $grid.isotope('layout');
    })
  });
})(jQuery);

$(window).on('load', function () {
  var $gallery = $('.gallery').isotope({
    itemSelector: '.gallery-item',
    masonry: {
      columnWidth: 50,
      isFitWidth: true,
    },
  });

  $gallery.imagesLoaded().progress(function () {
    $gallery.isotope('layout');
    console.log('layout');
  });
});

// Collapsed Sidebar (min-width:992px) and (max-width: 1199px)
$(function () {
  'use strict';

  var mql = window.matchMedia('(min-width:768px) and (max-width: 1199px)');
  var mql_hide = window.matchMedia('(max-width: 767px)');

  function doMinimize(e) {
    if (e.matches) {
      $('.sidebar').addClass('sidebar-collapsed');
    } else {
      $('.sidebar').removeClass('sidebar-collapsed');
    }
  }

  function doHide(e) {
    if (e.matches) {
      $('.sidebar').addClass('sidebar-close');
    } else {
      $('.sidebar').removeClass('sidebar-close');
    }
  }

  mql.addListener(doMinimize);
  mql_hide.addListener(doHide);
  doMinimize(mql);
  doHide(mql_hide);
});

document.addEventListener('DOMContentLoaded', function () {
  // text, table, list, elelemnts
  var show = new ShowMore('.showmore');
  console.log(show);
});
