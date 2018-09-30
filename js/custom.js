
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