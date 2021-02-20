export default function scrollContent() {
    function scrollContentHandler(media_check_max) {
        if (media_check_max.matches) {
            const productsMain = document.querySelector(".main-products");
            const mainSlider = document.querySelector(".main-slider");
            const animatedItems = document.querySelectorAll(".js_scroll-animate");

            for(let idx = 0; idx < animatedItems.length; idx++) {
                const animatedItem = animatedItems[idx];
                if (idx === 0) {
                    window.addEventListener(
                        "scroll",
                        () => {
                            document.body.style.setProperty(
                                "--scrollFirstCard",
                                // window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
                                (window.pageYOffset - mainSlider.offsetHeight) / (animatedItem.offsetHeight)
                            );
                        },
                        false
                    );
                } else if (idx === 1) {
                    window.addEventListener(
                        "scroll",
                        () => {
                            document.body.style.setProperty(
                                "--scrollSecondCard",
                                (window.pageYOffset - mainSlider.offsetHeight - animatedItem.offsetHeight) / (animatedItem.offsetHeight)
                            );
                        },
                        false
                    );
                }
            }
        }
    }

    const media_check_max = window.matchMedia("(max-width: 767.9px)");
    scrollContentHandler(media_check_max);
    media_check_max.addListener(scrollContentHandler);
    return null;
}
