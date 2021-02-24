export default function scrollContent() {
    const styleProperties = ["--scrollFirstCard", "--scrollSecondCard", "--scrollThirdCard", "--scrollForthCard", "--scrollFifthCard", "--scrollSixthCard", "--scrollSeventhCard"];

    function animateItemOnScroll(animatedItem, idx, mainSlider) {
        // if (animatedItem.classList.contains("main-produce__item")) {

        if (animatedItem.classList.contains("about__item")) {
            const aboutDescription = document.querySelector(".about__img");
            const aboutTitle = document.querySelector(".about__opportunities");

            window.addEventListener(
                "scroll",
                () => {
                    document.body.style.setProperty(
                        styleProperties[idx],
                        (window.pageYOffset - mainSlider.offsetHeight - aboutDescription.offsetHeight - aboutTitle.offsetHeight - animatedItem.offsetHeight * idx) / (animatedItem.offsetHeight)
                    );
                },
                false
            );
        } else {
            window.addEventListener(
                "scroll",
                () => {
                    document.body.style.setProperty(
                        styleProperties[idx],
                        (window.pageYOffset - mainSlider.offsetHeight - animatedItem.offsetHeight * idx) / (animatedItem.offsetHeight)
                    );
                },
                false
            );
        }
    }

    function scrollContentHandler(media_check_max) {
        if (media_check_max.matches) {
            const mainSlider = document.querySelector(".main-slider");
            // const descriptionBlock = document.querySelector(".main-products__description");
            // const produceDescription = document.querySelector(".main-produce__description");
            const animatedItems = document.querySelectorAll(".js_scroll-animate");

            for (let idx = 0; idx < animatedItems.length; idx++) {
                const animatedItem = animatedItems[idx];
                animateItemOnScroll(animatedItem, idx, mainSlider);
            }
        }
    }

    const media_check_max = window.matchMedia("(max-width: 767.9px)");
    scrollContentHandler(media_check_max);
    media_check_max.addListener(scrollContentHandler);
}
