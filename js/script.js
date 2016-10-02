/*document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
});*/

$(function() {
  $(function(){ $("select").uniform();
 });

 var $links = $('.one_line_menue a');
 $links.mousemove(function () {
  var $nextLineMenue = $(this).siblings('ul');
  $nextLineMenue.slideToggle();
}).mouseout(function () {
  $nextLineMenue.hide();
})
});
