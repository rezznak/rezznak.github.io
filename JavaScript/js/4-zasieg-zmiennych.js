
//zmienna globalna - deklarowana poza jakimkolwiek blokiem kodu
let number = 102;


/*const addNumber = () => {
    let number = 5;
    let newNumber = 14;
}
addNumber();*/

if(true == true) {
    let number = 5;
    let newNumber = 14;
    var zmiennaVar = 120;
    console.log(`Zmienne lokalne w bloku kodu ${number} i ${newNumber} i ${zmiennaVar}`)
}


// zwrócenie zmiennej lokalnej do przestrzeni globalnej - sposób 2 - niezalecany
const zasiegZmiennejVar = () => {
    var liczba = 100;
    return liczba;
}

const wynikDzialaniaFunkcji = zasiegZmiennejVar();
console.log(wynikDzialaniaFunkcji);
// console.log(zmiennaVar);
// console.log(liczba);
// console.log(newNumber);

var liczba2;
const zasiegZmiennejVar2 = () => {
    liczba2 = 105;
}
zasiegZmiennejVar2();
console.log(liczba2);