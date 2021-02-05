export default function nav() {
    let burger_button = document.querySelector('.nav__burger');
    let nav = document.querySelector('.nav');
    // let control = false;

    // function control_nav_bg(y) {
    //     if (y.matches) {
    //         if (burger_button.classList.contains('nav__burger--active')) {
    //             document.querySelector('.nav').style.background = '#fff';
    //         } else {
    //             // document.querySelector('.nav').style.background = 'rgba(4,28,99,.8)';
    //             nav.classList.remove('nav_active');
    //         }
    //         control = true;
    //     } else {
    //         control = false;
    //         if (burger_button.classList.contains('nav__burger--active')) {
    //             document.querySelector('.nav').style.background = '#fff';
    //         } else {
    //             document.querySelector('.nav').style.background = 'inherit';
    //             nav.classList.remove('nav_active');
    //         }
    //     }
    // }

    // let y = window.matchMedia("(max-width: 991px)");
    // control_nav_bg(y);
    // y.addListener(control_nav_bg);

    // function checkDropMenu(media_check) {
    //     if (media_check.matches) {
    //         document.querySelector('.burger-menu').style.display = 'none';
    //         burger_button.addEventListener('click', dropMenu);
    //         burger_button.classList.remove('nav__burger--active');
    //     } else {
    //         document.querySelector('.burger-menu').style.display = 'none';
    //         nav.classList.remove('nav_active');
    //         if (control == false) {
    //             document.querySelector('.nav').style.background = 'inherit';
    //         } else {
    //             // document.querySelector('.nav').style.background = '#fff';
    //         }
    //     }
    // }

    function dropMenu() {
        if (burger_button.classList.contains('nav__burger--active')) {
            document.querySelector('.burger-menu').style.display = 'none';
            burger_button.classList.remove('nav__burger--active');
            nav.classList.remove('nav_active');
        } else {
            burger_button.classList.add('nav__burger--active');
            document.querySelector('.burger-menu').style.display = 'block';
            nav.classList.add('nav_active');
        }
    }

    // let media_check = window.matchMedia("(max-width: 991px)")
    // checkDropMenu(media_check)
    // media_check.addListener(checkDropMenu)

    // let burger_links = document.querySelectorAll('.js_burger-link');
    // for (let burger_link of burger_links) {
    //     burger_link.addEventListener('click', dropMenu)
    // }

    burger_button.addEventListener('click', dropMenu);

    // Dropdown:
    //     $(e).on("click", (function () {
    //         const f = $(this).closest(".dropdown").find(".dropdown-menu");
    //             $(selector).stop().slideToggle(300);
    //     }));
    //     $(document).on("click", (function (t) {
    //         t.target.closest(".dropdown") || $(A).stop().slideUp(300);
    //     }))
}
