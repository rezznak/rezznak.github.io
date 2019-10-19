
// typ liczbowy

let wyplata = 5400;
let premia = 1200;

const dochod = wyplata + premia;
console.log(dochod, typeof dochod);

// typ string

let wyplataString = '5400';
let premiaString = '1200';

const dochodString = wyplataString + premiaString;
const dochodStringNum = Number(wyplataString) + Number(premiaString);
console.log(dochodString, typeof dochodString);
console.log(dochodStringNum, typeof dochodStringNum);

//typ logiczny - boolean

let czyIdziemyNaChinczyka = true;
if(czyIdziemyNaChinczyka) {
    console.log('Jemy chinczyka');
}
else {
    console.log('To nie jemy chińczyka');
}
console.log(typeof czyIdziemyNaChinczyka);

// typ undefined

let zmienna;
console.log(zmienna, typeof zmienna);

// typ null

let tytulStrony = document.getElementById('tytul');
console.log(tytulStrony, typeof tytulStrony);