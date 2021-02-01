// Main JS module
// objectFitImages polyfill
import objectFitImages from "object-fit-images";

import slider from './modules/slider';
import $ from "jquery";

$(function() {
  objectFitImages();
  slider();
});
