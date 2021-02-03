import slick from "slick-carousel";

export default function slider() {
    const slider1 = $('#js_banner-slider');
    // current_slide = document.getElementById('js_reviews-current-slide'),
    // current_slide_img = $('#js_current-slide-imgs');

    $(slider1).slick({
        prevArrow: '<button type="button" class="banner-slider__prev"><img class="banner-slider__arrow-img" src="img/svg/arrow-left.svg" alt="Arrow left"/></button>',
        nextArrow: '<button type="button" class="banner-slider__next"><img class="banner-slider__arrow-img" src="img/svg/arrow-right.svg" alt="Arrow right"/></button>',
        speed: 500,
        easing: "ease-in",
        // appendArrows: '#js_banner-slider',
        // arrows: false,
        // asNavFor: slider2,
        // responsive: [{
        //     breakpoint: 1140,
        //     settings: {
        //         arrows: false
        //     }
        // }]
    });

    const bgColors = ["rgba(255, 216, 198, 0.42)", "rgba(197, 221, 235, 0.54)", "rgba(148, 204, 255, 0.35)", "rgba(235, 197, 220, 0.4)", "rgba(201, 93, 15, 0.3)"];
    $(slider1).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        slider1.css({"background-color": bgColors[nextSlide]});
    });

    // $(slider2).slick({
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     asNavFor: slider1,
    //     arrows: true,
    //     focusOnSelect: true,
    //     centerPadding: '0',
    //     responsive: [{
    //         breakpoint: 1350,
    //         settings: {
    //             slidesToShow: 4
    //         }
    //     },
    //         {
    //             breakpoint: 1140,
    //             settings: {
    //                 fade: true,
    //                 arrows: false,
    //                 slidesToShow: 1
    //             }
    //         }
    //     ]
    // });

//     function functionMedia(mediaQuery) {
//         if (mediaQuery.matches) {
//             if (current_slide) {
//                 $(slider2).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//
//                     $(current_slide_img).attr({
//                         "src": `/img/review${nextSlide+1}.png`
//                     });
//                     current_slide.classList.add("active");
//
//                 });
//                 $(slider2).on('afterChange', function (event, slick, currentSlide) {
//                     current_slide.classList.remove("active");
//                 });
//                 current_slide.addEventListener("animationend", function () {
//                 	current_slide.classList.remove("active");
//                 });
//             }
    //     }
    // }
//     let mediaQuery = window.matchMedia("(min-width: 1140px)");
//     functionMedia(mediaQuery);
//     mediaQuery.addListener(functionMedia);
}

