export default function slider() {
    let burger_button = document.querySelector('.burger_button');
    let nav = document.querySelector('.nav');
    let control = false;

    function control_nav_bg(y) {
        if (y.matches) {
            if (burger_button.classList.contains('burger_button--active')) {
                document.querySelector('.nav').style.background = '#0066CC';
            } else {
                document.querySelector('.nav').style.background = 'rgba(4,28,99,.8)';
                nav.classList.remove('nav_active');
            }
            control = true;
        } else {
            control = false;
            if (burger_button.classList.contains('burger_button--active')) {
                document.querySelector('.nav').style.background = '#0066CC';
            } else {
                document.querySelector('.nav').style.background = 'inherit';
                nav.classList.remove('nav_active');
            }
        }
    }

    let y = window.matchMedia("(max-width: 767px)")
    control_nav_bg(y)
    y.addListener(control_nav_bg)

    function checkDropMenu(media_check) {
        if (media_check.matches) {
            document.querySelector('.burger_menu').style.display = 'none';
            burger_button.addEventListener('click', dropMenu);
            burger_button.classList.remove('burger_button--active');
        } else {
            document.querySelector('.burger_menu').style.display = 'none';
            nav.classList.remove('nav_active');
            // nav.style.bottom = "inherit";
            if (control == false) {
                document.querySelector('.nav').style.background = 'inherit';
            } else {
                document.querySelector('.nav').style.background = 'rgba(4,28,99,.8)';
            }
        }
    }

    function dropMenu() {
        if (burger_button.classList.contains('burger_button--active')) {
            document.querySelector('.burger_menu').style.display = 'none';
            burger_button.classList.remove('burger_button--active');
            nav.classList.remove('nav_active');
            // nav.style.bottom = "inherit";
            if (control == false) {
                document.querySelector('.nav').style.background = 'inherit';
            } else {
                document.querySelector('.nav').style.background = 'rgba(4,28,99,.8)';
            }
        } else {
            burger_button.classList.add('burger_button--active');
            document.querySelector('.burger_menu').style.display = 'block';
            document.querySelector('.nav').style.background = '#0066CC';
            nav.classList.add('nav_active');
            // nav.style.bottom = "0";
        }
    }

    let media_check = window.matchMedia("(max-width: 1490px)")
    checkDropMenu(media_check)
    media_check.addListener(checkDropMenu)
    let burger_links = document.querySelectorAll('.burger_link');

    for (let burger_link of burger_links) {
        burger_link.addEventListener('click', dropMenu)
    }
}
