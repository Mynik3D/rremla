import 'core-js/stable';
import 'regenerator-runtime/runtime';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'slick-slider/slick/slick';

$('.sl').slick({
  dots: true,
  lazyLoad: 'ondemand',
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
 
});
import objectFitImages from 'object-fit-images';
// import objectFitVideos from 'object-fit-videos';

svg4everybody();
objectFitImages();
// objectFitVideos();

window.$ = $;
window.jQuery = $;
window.objectFitImages = objectFitImages;
// window.objectFitVideos = objectFitVideos;

require('ninelines-ua-parser');
