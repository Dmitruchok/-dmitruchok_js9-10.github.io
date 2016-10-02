/*document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
});*/

$(function() {
  $(function(){ $("select").uniform();
 });

 var $links = $('.one_line_menue a');
 $links.on('click', function (e) {
   e.preventDefault();

  var $nextLineMenue = $(this).siblings('.two_line_menue');
     console.log($nextLineMenue);
  $nextLineMenue.slideToggle();
 })
});
