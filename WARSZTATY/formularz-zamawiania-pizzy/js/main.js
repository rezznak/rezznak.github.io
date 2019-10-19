
$(function() {

    let formPizzaOrder = $('.pizza-order');
    let imie = $('#imie');
    let nazwisko = $('#nazwisko');
    let ulica = $('#ulica');
    let dom = $('#dom');
    let mieszkanie = $('#mieszkanie');
    let kod = $('#kod');
    let miasto = $('#miasto');
    let wybierz = $('#wybierz');
    let cena = $('#cena');
    let pomidorowy = $('#sos-pom');
    let czosnkowy = $('#sos-czo');
    let rodo = $('#rodo');
    let zamow = $('#zamow')
    let blad = $('#blad');

    
    let pizzaPriceTable = [
        {id: 1, price: 22},
        {id: 2, price: 24},
        {id: 3, price: 25},
        {id: 4, price: 28},
        {id: 5, price: 23},
    ];

    wybierz.change(function(){

        let pizzaType = $(this).val()
        console.log(cena);
        if (pizzaType == 0) {
            cena.text("0 PLN");
            return;
        }

        pizzaPriceTable.forEach(function(elementTablicy) {
            if ( pizzaType == elementTablicy.id) {
                cena.text(elementTablicy.price + " PLN");
                return;
            }
        })   
    })

   formPizzaOrder.submit(function(){

        blad.empty();
        let bladArray = [];

        if ( $.trim(imie.val()) == "") {
            bladArray.push("Uzupełnij polę: Imię!");
        }
        if ( $.trim(nazwisko.val()) == "") {
            bladArray.push("Uzupełnij polę: Nazwisko!");
        }
        if ( $.trim(ulica.val()) == "") {
            bladArray.push("Uzupełnij polę: Ulica!");
        }
        if ( $.trim(dom.val()) == "") {
            bladArray.push("Uzupełnij polę: Nr domu.");
        }
        if ( $.trim(mieszkanie.val()) == "") {
            bladArray.push("Uzupełnij polę: Nr mieszkania.");
        }
        if ( $.trim(kod.val()) == "") {
            bladArray.push("Uzupełnij polę: Kod pocztowy.");
        }
        if ( $.trim(miasto.val()) == "") {
            bladArray.push("Uzupełnij polę: Miasto.");
        }
        
        if ( wybierz.val() == 0) {
                    bladArray.push("Wybierz pizzę.");
                }
        if ( rodo.is(':checked') == false) {
            bladArray.push("Musisz wyrazić zgodę.");          
        }

        


        if (bladArray.lenght != 0) {

            bladArray.forEach( function(bladElement) {
                let liBlad = `<li> ${bladElement} </li>`;
                console.log(liBlad)
                blad.append(liBlad);
            });
            //return false;
        }

        let orderObject = {
            imie: $.trim(imie.val()),
            nazwisko: $.trim(nazwisko.val()),
            ulica: $.trim(ulica.val()),
            dom: $.trim(dom.val()),
            mieszkanie: $.trim(mieszkanie.val()),
            kod: $.trim(kod.val()),
            miasto: $.trim(miasto.val()),
            wybierz: $.trim(wybierz.val()),
            sosy: [
                pomidorowy.is(':checked'), czosnkowy.is(':checked')
            ]
        };
        console.log(bladArray.length);
        console.log("działa");
        console.log(orderObject);
        console.log(JSON.stringify(orderObject));
        return false;
        
    })


    
});