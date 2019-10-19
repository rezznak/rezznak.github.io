
const imiona = [
    'Maciek',
    'Ala',
    'Rysiek',
    'Zbychu'
];

for(let i = 0; i <= imiona.length-1; i++) {
    if(i%2 == 0) {
        continue;
    }
    console.log(imiona[i]);
}

// for in - jedyna petla do iteracji po obiektach

const obj = {
    imie: 'Adam',
    nazwisko: 'Nowacki',
    wiek: 36
};

for (let i in obj) {
    console.log(`Właściwość: ${i} :::::: Wartość właściwości: ${obj[i]}`);
};


// petla while

let number = 10;
let iter = 11;
let wynik = []

while(iter <= number) {
    wynik.push(`iteracja nr ${iter + 1}`);
    iter++;
}

console.log(wynik.join('\n'));

// petla do while

do {
    wynik.push(`itracja nr ${iter + 1}`);
    iter++;
} while (iter <= number)

console.log(wynik.join('\n'));