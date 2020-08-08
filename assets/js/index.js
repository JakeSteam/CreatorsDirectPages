$(".single-feature-box").focus(function() {
    featuresSwiper.slideTo($(this).data('id'), 300);
});
$(".single-feature-box").mouseover(function() {
    featuresSwiper.slideTo($(this).data('id'), 300);
});

var featuresSwiper;
(function () {
    "use strict";

    $(document).ready(function () {
        new WOW().init();

        var swiper = new Swiper('.swiper-gallery-fullwidth', {
            pagination: '.swiper-pagination',
            slidesPerView: 5,
            autoplay: 2500,
            paginationClickable: true,
            spaceBetween: 30,
            freeMode: true,
            grabCursor: true,
            loop: true
        });

        featuresSwiper = new Swiper('.phone-slide-gallery', {
            spaceBetween: 0,
            slidesPerView: 1,
            grabCursor: true,
            centeredSlides: true,
            autoplay: 2500,
            loop: false,
            onSlideChangeStart: function(swiper) {
                $('#screen-' + swiper.previousIndex).removeClass('hover-box-hover');
                $('#screen-' + swiper.realIndex).addClass('hover-box-hover');
            }
        });

        $('#scrollToDemo').click(scrollToDemo);
        $('#scrollToPortal').click(scrollToPortal);
        $('#scrollToPricing').click(scrollToPricing);
        $('.go-to-signup').click(goToSignup);
        $('#ios-toggle').click(function() { selectOS(true) });
        $('#android-toggle').click(function() { selectOS(false) });

        $('#ios-toggle').button("toggle");
    });

    new Parallax(document.getElementById('scene'));
    new Parallax(document.getElementById('scene_two'));
})(jQuery);

lightbox.option({
    'showImageNumberLabel': false,
    'alwaysShowNavOnTouchDevices': true
});

function goToSignup() {
    window.location.href = "/creator/register";
}

function scrollToDemo() {
    $('#demo-list-link').click();
}

function scrollToPricing() {
    $('#pricing-list-link').click();
}

function scrollToPortal() {
    $('#portal-list-link').click();
}

function selectOS(isApple) {
    $('#ios-toggle').button('toggle');
    $('#android-toggle').button('toggle');
    var phoneWrapper = $('#phone-wrapper');
    if (isApple) {
        phoneWrapper.removeClass('android-slide').addClass('iphone-slide');
    } else {
        phoneWrapper.removeClass('iphone-slide').addClass('android-slide');
    }

    $('.swiper-image').each(function(index) {
        $(this).attr("src", "assets/img/screenshots/screen-" + (isApple ? "iphone" : "android") + "-" + (index + 1) + ".png")
    })
}
