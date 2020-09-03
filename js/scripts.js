
$( document ).ready(function() {


    $("nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    AOS.init({disable: 'mobile'});

    //show menu mobile

    $( ".menu-icon" ).click(function() {
        $('nav').addClass('show');
    });

    //hide menu mobile

    $( ".nav__link" ).click(function() {
        $('nav').removeClass('show');
    });

    $( ".close-menu" ).click(function() {
        $('nav').removeClass('show');
    });

});
