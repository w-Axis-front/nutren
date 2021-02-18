import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'

export default function masonryGrid() {
    const grid = document.querySelector('.grid');

    imagesLoaded( grid, function() {
        // init Masonry after all images have loaded
        const msnry = new Masonry(grid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            gutter: 95,
            // transitionDuration: 300,
            percentPosition: true
        })
    });
}
