/*document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
});*/

$(function() {
  $(function(){ $("select").uniform();
 });

$('nav li').mouseover(function(){
       $(this).children('ul').slideDown();
       $(this).mouseleave(function(){
             $(this).children('ul').slideUp();
       });

    });
})
