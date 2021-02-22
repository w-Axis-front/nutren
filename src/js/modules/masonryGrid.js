import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'

export default function masonryGrid() {
    const grid = document.querySelector('.js_grid');

    function buildMasonry(media_check_min) {
        if (media_check_min.matches) {
            imagesLoaded( grid, function() {
                // init Masonry after all images have loaded
                const msnry = new Masonry(grid, {
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-sizer',
                    gutter: 95,
                    percentPosition: true,
                })
            });
        }
    }

    const media_check_min = window.matchMedia("(min-width: 768px)");
    buildMasonry(media_check_min);
    media_check_min.addListener(buildMasonry);
}
