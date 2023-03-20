$(document).ready(function(){

    $('.bx-menu').click(function() {
        $(this).toggleClass('bx-x');
        $('.navbar').toggleClass('nav-toggle');
    });
    
    $(window).on('load scroll', function(){
        $('.bx-menu').removeClass('bx-x');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('.encabezado').css({'background':'#00154f','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'})
        }else{
            $('.encabezado').css({'background':'none','box-shadow':'none'})
        }
    });
});