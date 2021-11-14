"use strict";


jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
    

    /*---------------------------------------------*
     * Portfolio Pop Up Animation
     ---------------------------------------------*/

    $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /*---------------------------------------------*
     * Menu Section
     ---------------------------------------------*/

    

    //clipped image - blur effect
    set_clip_property();
    $(window).on('resize', function () {
        set_clip_property();
    });

    function set_clip_property() {
        var $header_height = $('.cd-header').height(),
                $window_height = $(window).height(),
                $header_top = $window_height - $header_height,
                $window_width = $(window).width();
        $('.cd-blurred-bg').css('clip', 'rect(' + $header_top + 'px, ' + $window_width + 'px, ' + $window_height + 'px, 0px)');
    }
    $('#main-nav a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.hash);
        $('.home-main-content').removeClass('move-out');
        $('#main-nav').removeClass('is-visible');
        $('.cd-shadow-layer').removeClass('is-visible');
        $('body,html').animate(
                {'scrollTop': target.offset().top},
        900
                );
    });

});
