// wstawianie elementu css w tle

let counter = 0;

let timer = setInterval(() => {
    if(counter == 5) {
        clearInterval(timer);
        return;
    }
const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet'); //('atrybut', 'wartość atrybutu')
link.setAttribute('href', 'css/style.css');

// setTimeout opóźnia wydarzenie setInterval powtarza cyklicznie

document.head.appendChild(link);

const p = document.createElement('p');
const pText = document.createTextNode(`Nowy akapit bitch! ${++counter}`);
p.appendChild(pText);
document.querySelector('#section1').insertAdjacentElement('beforebegin', p);
document.querySelector('#section1').insertAdjacentHTML('afterend', `<h1> tra la la</h1>`);

}, 1600);
// to je dobre!!!:D

setTimeout(() => {
    const h1 = document.querySelector('#main-header');
    h1.parentElement.removeChild(h1);
}, 2000);