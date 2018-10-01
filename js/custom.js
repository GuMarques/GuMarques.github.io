
/* JQuery */

/* Preloader */
$('.preloader').show();
$('.content').hide();
$(document).ready(function(){
    $('.preloader').hide();
    $('.content').show();
    /* Headroom Menu */
    var myElement = document.querySelector("header");
    var headroom = new Headroom(myElement);
    headroom.init();
    /* Menu Mobile */
    $('.sidenav').sidenav();
    /* Colapsable Perfil */
    $('.collapsible').collapsible();
    /* Parallax Habilidades */
    $('.parallax').parallax();    
});
