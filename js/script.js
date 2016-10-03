/*document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
});*/

$(function() {
  $(function(){ $("select").uniform();
 });

 /*var $links = $('.one_line_menue a');
 $links.mouseover(function () {
  var $nextLineMenue = $(this).siblings('ul');
  $nextLineMenue.slideToggle();
})*/

var $links = $('.one_line_menue a');
$links.mouseover(function () {
 var $nextLineMenue = $(this).siblings('ul');
 $nextLineMenue.slideDown();
})
var $ul = $('.one_line_menue ul');
$ul.mouseleave(function () {
  $ul.slideUp();
})

})
