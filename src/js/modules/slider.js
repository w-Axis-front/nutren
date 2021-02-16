import slick from "slick-carousel";

export default function slider() {
    const slider1 = $('#js_banner-slider');
    // const slider1List = slider1.find(".slick-list");
    const slides = $(".slick-slide");

    $(slider1).slick({
        prevArrow: '<button type="button" class="banner-slider__prev"><svg class="banner-slider__arrow-img" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path class="svg" fill-rule="evenodd" clip-rule="evenodd" d="M14.8374 29.6653L0.343061 15.7904C-0.114354 15.3526 -0.114354 14.6476 0.343061 14.2098L14.8374 0.334937C15.2998 -0.108496 16.0539 -0.111309 16.5212 0.324625C16.9886 0.761496 16.9935 1.47305 16.5322 1.91555L2.8643 15.0001L16.5322 28.0847C16.9935 28.5272 16.9886 29.2388 16.5212 29.6756C16.2891 29.8922 15.9874 30 15.6848 30C15.3772 30 15.0706 29.8884 14.8374 29.6653Z"/>\n' +
            '</svg>\n</button>',
        nextArrow: '<button type="button" class="banner-slider__next"><svg class="banner-slider__arrow-img" width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '    <path class="svg" fill-rule="evenodd" clip-rule="evenodd"\n' +
            '          d="M2.03755 29.6653L16.5319 15.7904C16.9894 15.3526 16.9894 14.6476 16.5319 14.2098L2.03755 0.334937C1.57518 -0.108496 0.821089 -0.111309 0.353752 0.324625C-0.113585 0.761496 -0.118546 1.47305 0.342838 1.91555L14.0107 15.0001L0.342838 28.0847C-0.118546 28.5272 -0.113585 29.2388 0.353752 29.6756C0.585932 29.8922 0.887568 30 1.1902 30C1.49779 30 1.80438 29.8884 2.03755 29.6653Z"\n' +
            '          />\n' +
            '</svg></button>',
        speed: 1000,
        easing: "ease-in",
        touchMove: false,
        swipe: false,

        // responsive: [{
        //     breakpoint: 1140,
        //     settings: {
        //         arrows: false
        //     }
        // }]
    });
    
    const bgColors = ["rgba(252, 213, 196, 0.42)", "rgba(215, 240, 245, 0.54)", "rgba(178, 214, 248, 0.35)", "rgba(246, 208, 231, 0.4)", "rgba(208, 149, 106, 0.2)"];

    function animateSlider(mediaQuery) {
        if (mediaQuery.matches) {

            $(slider1).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                slider1.css({"background-color": bgColors[nextSlide]});

                let direction;
                if (nextSlide == currentSlide) {
                    direction = "same";
                } else if (Math.abs(nextSlide - currentSlide) == 1) {
                    direction = (nextSlide - currentSlide > 0) ? "right" : "left";
                } else {
                    direction = (nextSlide - currentSlide > 0) ? "left" : "right";
                }

                // FIX JUMPING ANIMATION:
                 /*let slideCountZeroBased = slick.slideCount - 1;
                 if (direction == 'right') {
                     $('.slick-cloned[data-slick-index="' + (nextSlide + slideCountZeroBased + 1) + '"]', $(slider1)).addClass('slick-current-clone-animate');
                 }
                 if (direction == 'left') {
                    $('.slick-cloned[data-slick-index="' + (nextSlide - slideCountZeroBased - 1) + '"]', $(slider1)).addClass('slick-current-clone-animate');
                 }*/
                // fix eng

                slides.each(function () {
                    // if ((currentSlide < nextSlide) || (nextSlide === 0 && currentSlide === (slick.slideCount - 1))) {
                    const _this = $(this);
                    const img1 = $(this).find(".banner-slider__slide-img1"), img2 = $(this).find(".banner-slider__slide-img2"),
                        img3 = $(this).find(".banner-slider__slide-img3");
                    // Animate images:
                    if (direction == 'left') {
                        if (!_this.hasClass("slick-current")) {
                            img1.css({"transform": "translateX(-70%)"});
                            img2.css({"transform": "translateX(-70%)"});
                            img3.css({"transform": "translateX(-65%)"});
                        }
                        img1.css({"transition": "transform 0s ease 0s"});
                        img2.css({"transition": "transform 0s ease 0s"});
                        img3.css({"transition": "transform 0s ease 0s"});
                        setTimeout(function () {
                            img1.css({"transition": "transform .95s ease-in-out 0s", "transform": "translateX(0)"});
                            img2.css({"transition": "transform .95s ease-out 0s", "transform": "translateX(0)"});
                            img3.css({"transition": "transform .8s ease-in 0s", "transform": "translateX(0)"});
                        }, 100);
                    }
                    if (direction == 'right') {
                        if (!_this.hasClass("slick-current")) {
                            img1.css({"transform": "translateX(70%)"});
                            img2.css({"transform": "translateX(70%)"});
                            img3.css({"transform": "translateX(65%)"});
                        }
                        img1.css({"transition": "transform 0s ease 0s"});
                        img2.css({"transition": "transform 0s ease 0s"});
                        img3.css({"transition": "transform 0s ease 0s"});
                        setTimeout(function () {
                            img1.css({"transition": "transform .95s ease-in-out 0s", "transform": "translateX(0)"});
                            img2.css({ "transition": "transform .85s ease-in 0s", "transform": "translateX(0)"});
                            img3.css({"transition": "transform .95s ease-out 0s", "transform": "translateX(0)"});
                        }, 100);
                    }
                    // end animate images.
                });
            });

            /*$(slider1).on('afterChange', function (event, slick, currentSlide, nextSlide) {
                // FIX JUMPING ANIMATION:
                 $('.slick-current-clone-animate', $(slider1)).removeClass('slick-current-clone-animate');
                 $('.slick-current-clone-animate', $(slider1)).removeClass('slick-current-clone-animate');
            });*/
        } else {
            $(slider1).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                slider1.css({"background-color": bgColors[nextSlide]});

                let direction;
                if (nextSlide == currentSlide) {
                    direction = "same";
                } else if (Math.abs(nextSlide - currentSlide) == 1) {
                    direction = (nextSlide - currentSlide > 0) ? "right" : "left";
                } else {
                    direction = (nextSlide - currentSlide > 0) ? "left" : "right";
                }

                // FIX JUMPING ANIMATION:
                 /*let slideCountZeroBased = slick.slideCount - 1;
                 if (direction == 'right') {
                     $('.slick-cloned[data-slick-index="' + (nextSlide + slideCountZeroBased + 1) + '"]', $(slider1)).addClass('slick-current-clone-animate');
                 }
                 if (direction == 'left') {
                     $('.slick-cloned[data-slick-index="' + (nextSlide - slideCountZeroBased - 1) + '"]', $(slider1)).addClass('slick-current-clone-animate');
                 }*/
                // fix eng

                //slider1List.css("overflow", "visible");

                slides.each(function () {
                    // if ((currentSlide < nextSlide) || (nextSlide === 0 && currentSlide === (slick.slideCount - 1))) {
                    const _this = $(this);
                    const img1 = _this.find(".banner-slider__slide-img1"), img2 = _this.find(".banner-slider__slide-img2"),
                        img3 = _this.find(".banner-slider__slide-img3"), slideContent = _this.find(".banner-slider__slide");
                    //slideContent.css("overflow-x", "visible");                    

                    // Animate images:
                    if (direction == 'left') {
                        if (!_this.hasClass("slick-current")) {
                            img1.css({"transform": "translateX(-70%)"});
                            img2.css({"transform": "translateX(-70%)"});
                            img3.css({"transform": "translateX(-65%)"});
                        }
                        img1.css({"transition": "transform 0s ease 0s"});
                        img2.css({"transition": "transform 0s ease 0s"});
                        img3.css({"transition": "transform 0s ease 0s"});
                        setTimeout(function () {
                            img1.css({ "transition": "transform .95s ease-out 0s", "transform": "translateX(0)" });
                            img2.css({ "transition": "transform .7s ease-out .1s", "transform": "translateX(0)" });
                            img3.css({ "transition": "transform .8s ease-out 0s", "transform": "translateX(0)" });
                        }, 100);
                    }
                    if (direction == 'right') {
                        if (!_this.hasClass("slick-current")) {
                            img1.css({"transform": "translateX(70%)"});
                            img2.css({"transform": "translateX(70%)"});
                            img3.css({"transform": "translateX(65%)"});
                        }
                        img1.css({"transition": "transform 0s ease 0s"});
                        img2.css({"transition": "transform 0s ease 0s"});
                        img3.css({"transition": "transform 0s ease 0s"});
                        setTimeout(function () {
                            img1.css({ "transition": "transform .95s ease-in-out 0s", "transform": "translateX(0)" });
                            img2.css({ "transition": "transform .7s ease-in 0s", "transform": "translateX(0)" });
                            img3.css({ "transition": "transform .95s ease-out 0s", "transform": "translateX(0)" });
                        }, 100);
                    }
                    // end animate images.
                });
            });

            /*$(slider1).on('afterChange', function (event, slick, currentSlide, nextSlide) {
                slider1List.css("overflow", "hidden");
                slides.each(function () {
                    // if ((currentSlide < nextSlide) || (nextSlide === 0 && currentSlide === (slick.slideCount - 1))) {
                    const _this = $(this);
                    const slideContent = _this.find(".banner-slider__slide");
                    slideContent.css("overflow-x", "hidden");                    
                });
                // FIX JUMPING ANIMATION:
                 $('.slick-current-clone-animate', $(slider1)).removeClass('slick-current-clone-animate');
                 $('.slick-current-clone-animate', $(slider1)).removeClass('slick-current-clone-animate');
            });*/
        }
    }

    let mediaQuery = window.matchMedia("(min-width: 992px)");
    animateSlider(mediaQuery);
    mediaQuery.addListener(animateSlider);
}

