export default function scrollContent() {
    const styleProperties = ["--scrollFirstCard", "--scrollSecondCard", "--scrollThirdCard", "--scrollForthCard", "--scrollFifthCard", "--scrollSixthCard", "--scrollSeventhCard"];

    function animateItemOnScroll(animatedItem, idx, mainSlider) {
        window.addEventListener(
            "scroll",
            () => {
                document.body.style.setProperty(
                    styleProperties[idx],
                    // window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
                    (window.pageYOffset - mainSlider.offsetHeight - animatedItem.offsetHeight * idx) / (animatedItem.offsetHeight)
                    // (window.pageYOffset - mainSlider.offsetHeight - animatedItem.offsetHeight) / (animatedItem.offsetHeight)
                );
            },
            false
        );
    }

    function scrollContentHandler(media_check_max) {
        if (media_check_max.matches) {
            // const productsMain = document.querySelector(".main-products");
            const mainSlider = document.querySelector(".main-slider");
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
