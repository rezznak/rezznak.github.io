
$(function(){

    $('body').find('p').eq(1).css({"color": "red", "font-size": "50px", "background-color": "green", "display": "inline"});

    $('p').each( function(index) {

    $(this).addClass('paragraf-' + index);
    console.log(jQuery(this));
    });

});

