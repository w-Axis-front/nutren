// Main JS module
// objectFitImages polyfill
import objectFitImages from "object-fit-images";

import $ from "jquery";
import slider from './modules/slider';
import nav from './modules/nav';
import masonryGrid from "./modules/masonryGrid";

$(function() {
  objectFitImages();
  slider();
  nav();
  masonryGrid();
});
