
$(function() {

    //Efekt hide i show
    $('p').hide(3000).show(3000);
    
    //Efekt fadeOut i fadeIn
    $('h1').fadeOut(3000).fadeIn(3000);

    //Efekt silideUp i slideDown
    $('h2').slideUp(3000).slideDown(3000);

    //Efekt animacji z funkcją zwrotną
    //$('h3').animate({"font-size": "3em", "margin-left": "30vw",}, 4000, animacja);
    $('h3').animate({"font-size": "4em"}, 3000, animacja);
});

function animacja() {
//     console.log("Zakończono pierwszą animację. Zaraz startuje druga!");
    $('h3').animate({"background-color": "green"}, 2500);
 }

//h3 czciinka, po zakonczeniu druga zmieni tlo