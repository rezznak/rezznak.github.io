
$(function() {

//pobieranie tekstu
let tekstPierwszwgoParagrafu = $('#paragraf').text();
console.log(tekstPierwszwgoParagrafu);

//dodawanie tekstu

$('.paragraf:first').text("Ala ma kota");
//$('.paragraf').eq(1).text("Ala ma kota");

// dodoawanie HTML

$('.paragrafnext').html("To jest <strong>paragraf</strong> z dodanym <br> HTML");

// dodawanie tresci na koncu selektora
$('.paragrafnext').append("<br>Treść na końcu selektora");

// dodawanie tresci za selektorem
$('.paragrafnext').after("Treść za selektorem<br>");

// dodawanie tresci na początku selektora
$('.paragrafnext').prepend("Treść na początku selektora <br>");

// dodawanie tresci przed selektorem
$('.paragrafnext').before("Treść przed selektorem");
//usuwanie selektora wraz z zawartoscia
$("strong").remove();
// usuwanie tylko zawartosci selektoraZ
$(".paragraf").empty();

//dodawanie CSS

$('.paragrafnext').css('color', 'blue');
$('.paragrafnext').css({'font-size': '30px', 'background-color': 'pink'});

//pobrac value
$('input#imie').val("Krystian");

// dodanie klasy
$('h1').addClass('blue');

//dodanie atrybutu

$('h1').attr("imie", "Marcin");

//usuwanie

$('h1').removeClass('blue');
});