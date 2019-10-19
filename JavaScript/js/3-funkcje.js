
function mnozenie(liczba1, liczba2, liczba3) {
    //przypisanie do zmiennej 'wynik' wyniku działania mnożenia trzech parametrów
    let wynik = liczba1 * liczba2 * liczba3;
    //Tworzę tekst z wynikiem - 2 sposoby - es5 i es6
    let rezultatDzialaniaFunkcji = 'Twój wynik to: ' + wynik;
    let rezultatDzialaniaFunkcji2 = `Twój wynik to: ${wynik}`;

    //zwracam z funkcji wynik jej działania, wszystko poniżej już się nie wykona
    return rezultatDzialaniaFunkcji;

}

let wynikDzialaniaFunkcji = mnozenie(2,2,2);
console.log(wynikDzialaniaFunkcji);

// Przepisujemy na funkcje strzałkową
const mnozenieFatArrow = (par1, par2, par3) => {
    let wynik = par1 * par2 * par3;
    let rezultatDzialaniaFunkcji2 = `Twój wynik to: ${wynik}`;
    return rezultatDzialaniaFunkcji2;
}

let wynikMnozeniaFatArrow = mnozenieFatArrow(3, 2, 1);
console.log(wynikMnozeniaFatArrow);

// skrótowiec funkcji strzałkowej

const mnozenieSkrotowo = (p1, p2, p3) => `Szanowny userze, Twój wynik to: ${p1 * p2 * p3}, pozdrawiamy`;
let wynikSkrotowo = mnozenieSkrotowo(2, 3, 4);
let wynikSkrotowo2 = mnozenieSkrotowo(5, 3, 4);
let wynikSkrotowo3 = mnozenieSkrotowo(2, 1, 4);
let wynikSkrotowo4 = mnozenieSkrotowo(2, 7, 2);
console.log(wynikSkrotowo, wynikSkrotowo2, wynikSkrotowo3, wynikSkrotowo4);