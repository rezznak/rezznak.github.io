
$( function() {
    'use strict';

    $('p').click(function() {
        $(this).css("color", "orange");
    });

    $('h1').on({
        'click': function() {
            $(this).css("color", "green");
        },
        'mouseleave': function() {
            $(this).css("color", "inherit");
        }
    });


});