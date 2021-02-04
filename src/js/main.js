// Main JS module
// objectFitImages polyfill
import objectFitImages from "object-fit-images";

import slider from './modules/slider';
import nav from './modules/nav';
import $ from "jquery";

$(function() {
  objectFitImages();
  slider();
  nav();
});
