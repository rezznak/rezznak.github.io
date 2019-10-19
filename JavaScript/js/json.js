let jsonOsoby = {
   "osoby": [
       {
           imie: "Krystian", 
           nazwisko: "Dziopa", 
           wzrost: 180, 
           oczy: "niebieskie", 
           zainteresowania: [] 
       },
       {
           imie: "Dominik",
           nazwisko: "Gomuła",
           wzrost: 170,
           oczy: "brązowe",
           zainteresowania: [
               { nazwa: "gotowanie" },
               { nazwa: "języki" }
           ]
       },
       {
           imie: "Claudia",
           nazwisko: "Żelazowska",
           wzrost: 167,
           oczy: "brązowe",
           zainteresowania: [
               { nazwa: "programowanie" },
               { nazwa: "podroze" },
               { nazwa: "języki" }
           ]
           
       }
   ]
}

// wyswietlenie pobranej bazy danych za pomocą funkcji forEach (super do przechodzenia po tabelach [])

jsonOsoby.osoby.forEach(function(elementTablicy, indexTablicy) {
    let osoba = `Imię: ${elementTablicy.imie}, nazwisko: ${elementTablicy.nazwisko}, wzrost: ${elementTablicy.wzrost}, zainteresowania: `;
    let dodatkowyTekst = `nudziarz`;
    if(elementTablicy.zainteresowania.length > 0) {
        dodatkowyTekst = ``;
        elementTablicy.zainteresowania.forEach(function(element, index) {
            dodatkowyTekst += `${element.nazwa}, `;
        })
    }
    osoba += dodatkowyTekst;
    console.log(osoba);
});