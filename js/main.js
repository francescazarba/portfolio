/*Wow js*/

$(function(){
  new WOW().init();
})

/*Toggle menu*/
 $('.toggle--menu').on('click', function(){
    $(this).toggleClass('active')
    $('body').toggleClass('overlay-menu')
}) 
