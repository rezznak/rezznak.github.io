
const div = document.getElementsByClassName('par1')[0];
//console.log(div);
const rodzicDiva = div.parentElement;
//console.log(rodzicDiva);
const potomkowieDiva = div.children;
//console.log(potomkowieDiva);
const pierwszyPotomek = div.firstElementChild;
//console.log(pierwszyPotomek);
const ostatniElement = div.lastElementChild;
//console.log(ostatniElement);
const poprzedniElement = div.previousElementSibling;
//console.log(poprzedniElement);
const elementZaDivem = div.nextElementSibling;
//console.log(elementZaDivem);

console.log(elementZaDivem.nextElementSibling);