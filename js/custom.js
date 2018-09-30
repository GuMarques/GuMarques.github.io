
/* JQuery */

/* Preloader */
$('.preloader').show();
$('.content').hide();
$(document).ready(function(){
    $('.preloader').hide();
    $('.content').show();
    /* Menu Mobile */
    $('.sidenav').sidenav();
});

/* Colapsable Perfil */
$(document).ready(function(){
    $('.collapsible').collapsible();
});

/* Parallax Habilidades */
$(document).ready(function(){
    $('.parallax').parallax();
  });