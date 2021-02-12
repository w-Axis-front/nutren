export default function nav() {
    const burger_button = document.querySelector('.nav__burger');
    const nav = document.querySelector('.nav');
    const burgerNav = $('.burger-menu');
    const dropdownTrigger = $('.dropdown-toggle');
    const dropdownContent = $('.dropdown-menu');
    const fullNav = $('.nav__wrap');
    const logoImg = $(".nav__logo-img");
    const logoImgCollapsed = $(".nav__logo-img-collapsed");
    const wrapNav = $(".nav__wrap-menu");
    const langBlock = $(".nav__lang");

    function dropMenu() {
        if (burger_button.classList.contains('nav__burger--active')) {
            burgerNav.hide();
            burger_button.classList.remove('nav__burger--active');
            nav.classList.remove('nav_active');
        } else {
            burger_button.classList.add('nav__burger--active');
            burgerNav.show();
            // document.querySelector('.burger-menu').style.display = 'block';
            dropdownContent.stop().slideUp(10);
            nav.classList.add('nav_active');
        }
    }

    function openFullNav() {
        if (fullNav.hasClass("collapsed")) {
            logoImgCollapsed.stop().css("display", "none");
            fullNav.removeClass('collapsed');
            logoImg.stop().css("display", "inline-block");
            setTimeout(function () {
                wrapNav.stop().css("display", "flex");
                langBlock.stop().css("display", "flex");
            }, 300);
        }
    }

    function scrollHandler(media_check_min) {
        let previousScroll = 0;
        if (media_check_min.matches) {
            burgerNav.hide();
            dropdownContent.stop().slideUp(10);
            // wrapNav..stop().css("display", "flex");
            if (burger_button) {
                burger_button.classList.remove('nav__burger--active');
            }
            if (nav) {
                nav.classList.remove('nav_active');
            }
            wrapNav.stop().css("display", "flex");
            logoImg.stop().css("display", "inline-block");
            logoImgCollapsed.stop().css("display", "none");
            langBlock.stop().css("display", "flex");
            if (fullNav.hasClass("collapsed")) {
                fullNav.removeClass('collapsed');
            }
            $(window).scroll(function () {
                if (media_check_min.matches) {
                    let currentScroll = $(this).scrollTop();
                    if (currentScroll > previousScroll + 30) {
                        fullNav.addClass('collapsed');
                        logoImg.stop().css("display", "none");
                        logoImgCollapsed.stop().css("display", "inline-block");
                        wrapNav.stop().css("display", "none");
                        langBlock.stop().css("display", "none");
                        previousScroll = currentScroll - 30;
                        fullNav.hover(function () {
                            // setTimeout(function () {
                                openFullNav();
                            // }, 300);
                        });
                    } else if (currentScroll < previousScroll - 30) {
                        openFullNav();
                        previousScroll = currentScroll + 30;
                    }
                }
            });

        } else {
            if (burger_button) {
                burger_button.addEventListener('click', dropMenu);
            }
            wrapNav.stop().css("display", "none");
            logoImg.stop().css("display", "inline-block");
            logoImgCollapsed.stop().css("display", "none");
            langBlock.stop().css("display", "none");
            if (fullNav.hasClass("collapsed")) {
                fullNav.removeClass('collapsed');
            }
        }
    }

    const media_check_min = window.matchMedia("(min-width: 992px)");
    scrollHandler(media_check_min);
    media_check_min.addListener(scrollHandler);

    dropdownTrigger.on("click", function () {
        dropdownContent.stop().slideToggle(100);
    });
    dropdownContent.children("li").each(function () {
        $(this).on("click", function () {
            dropdownContent.stop().slideUp(100);
        });
    })
}
