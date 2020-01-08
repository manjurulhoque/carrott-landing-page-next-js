// ==================================================
// Project Name  :  Carrott
// File          :  JS Base
// Version       :  1.0.0
// Last change   :  05 November 2019
// Author        :  ----------
// Developer:    :  Jaherul Alom
// ==================================================




(function($) {
  "use strict";




  
  // back to top - start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('#backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $("#scroll").on('click', function() {
      $("html,body").animate({
        scrollTop: $("#thetop").offset().top
      }, "slow");
      return false
    })
  });
  // back to top - end
  // --------------------------------------------------




  
  // preloader - start
  // --------------------------------------------------
  // $(window).on('load', function(){
  //   $('#preloader').fadeOut('slow',function(){$(this).remove();});
  // });
  // preloader - end
  // --------------------------------------------------




  
  // background image - start
  // --------------------------------------------------
  $('[data-background]').each(function() {
    $(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
  });
  // background image - end
  // --------------------------------------------------




  
  // menu button - start
  // --------------------------------------------------
  $(document).ready(function () {
    $('.close-btn, .overlay').on('click', function () {
      $('#sidebar-menu').removeClass('active');
      $('.overlay').removeClass('active');
    });

    $('#sidebar-collapse').on('click', function () {
      $('#sidebar-menu').addClass('active');
      $('.overlay').addClass('active');
    });
  });
  // menu button - end
  // --------------------------------------------------




  
  // scroll animation - start
  // --------------------------------------------------
  AOS.init({
    disable: function() {
      var maxWidth = 769;
      return window.innerWidth < maxWidth;
    }
  });
  // scroll animation - end
  // --------------------------------------------------





  // sticky menu - start
  // --------------------------------------------------
  var headerId = $(".sticky-header");
  $(window).on('scroll' , function() {
    var amountScrolled = $(window).scrollTop();
    if ($(this).scrollTop() > 80) {
      headerId.removeClass("not-stuck");
      headerId.addClass("stuck");
    } else {
      headerId.removeClass("stuck");
      headerId.addClass("not-stuck");
    }
  });
  // sticky menu - end
  // --------------------------------------------------



  
})(jQuery);