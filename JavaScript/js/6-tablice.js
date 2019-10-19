
const samochody = [
    'Honda',
    'Fiat',
    'Citroen',
    'Mazda',
    'Audi'
];
console.log(samochody, samochody.length);

//dodajemy na końcu tablicy

samochody.push ('BMW', 'Porshe');
console.log(samochody, samochody.length);

// dodajemy na początku

samochody.unshift('Dacia', 'Skoda');
console.log(samochody, samochody.length);

// usuwamy z konca tabeli i zwracamy usunięty element do zmiennej

let usunietyZKonca = samochody.pop();
console.log(samochody, samochody.length);
console.log(`Usunięty element to: ${usunietyZKonca}`);

//usuwamy z początku tablicy i zwracamy usunięty element do zmiennej

let usunietyZPoczatku = samochody.shift();

// zamiana tablicy na string(tekst)
let tekstZTablicy = samochody.join('--');
console.log(tekstZTablicy);
let tablicaZeStringa = tekstZTablicy.split('--');
console.log(tablicaZeStringa);
//console.log(samochody, samochody.length);
console.log(`Usunięty element to: ${usunietyZPoczatku}`);

//usuwamy 3 elementy z końca
let usunieteZKonca3 = samochody.splice(samochody.length - 3);
console.log(usunieteZKonca3);
console.log(samochody, samochody.length);

// posortowana odwrócona

let odwroconaTablica = samochody.reverse();
console.log(odwroconaTablica);

let posortowana = samochody.sort();
console.log(posortowana);

// istnieje wiec poda pozycję?

let czIstniejeWTablicy = samochody.indexOf('Citroen');
console.log(czIstniejeWTablicy);

//nie istnieje daltego zwróci -1

let czIstniejeWTablicy2 = samochody.indexOf('Romet');
console.log(czIstniejeWTablicy2);

// zwraca true lub false
let czyIstniejeWTablicy3 = samochody.includes('Porshe');
console.log(czyIstniejeWTablicy3);


// sprawdzam czy zmienna jest tablicą
let czyTablica = Array.isArray(samochody);
console.log(czyTablica);
//console.log(czyTablica)


//metoda "przechodzenia" po wszystkich elementach tablicy

samochody.forEach(function(elementTablicy, indexTablicy, tablica){
    console.log(`Wartość elementu: ${elementTablicy} | index elementu ${indexTablicy}`)
});