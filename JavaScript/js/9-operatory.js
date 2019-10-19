let liczba1 = 5;
let liczba2 = 2;
let liczba3 = 3;

//operatory arytmetyczne

const mnozenie = liczba1 * liczba2;
const dzilenie = liczba1 / liczba2;
const dodawanie = liczba3 + liczba2;
const odejmowanie = liczba1 - liczba3;
const modulo= liczba3 % liczba2;

// console.log(mnozenie, dzilenie, dodawanie, odejmowanie, modulo);


// // pre- i postinkrementacja

// let pre = ++liczba3;
// let post = liczba2++;

// console.log(pre, post);
// post = liczba2;
// console.log(post);

// console.log(liczba1, liczba1++);
// console.log(liczba2, ++liczba2);
// console.log(liczba1);

//operatory porównania 

console.log(liczba1 === '5');
console.log(liczba1 >= 3);
console.log(liczba1 > liczba2 && liczba2 > liczba3);
console.log(liczba1 > liczba2 || liczba2 > liczba3);

console.log()

//operator trójargumentowy

let wynik = (liczba2 == liczba3) ? 'TAK' : 'NIE';
console.log(wynik);

liczba3 += 15;
console.log(liczba3);