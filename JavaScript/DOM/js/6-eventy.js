const btn = document.getElementById('scroll-down');
const scrollDown = () => {
    document.documentElement.scrollTop = window.innerHeight;
}
btn.addEventListener('click', scrollDown);

setTimeout( () => {
    btn.removeEventListener('click', scrollDown)
}, 10000);


// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

const h1 = document.querySelector('h1');

h1.addEventListener('mouseover', () => {
    document.body.classList.add('scroll');
});
h1.addEventListener('mouseout', () => {
    document.body.classList.remove('scroll');
});

//*||*\\*//*||*\\*//*||*\\*//*||*\\*//*||*\\*//*||*\\*//*||*\\*//*||*\\*//*||*\\

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let imie = document.querySelector('[name="name"]').value;
    let lastname = document.querySelector('[name="lastname"]').value;
    let message = `Dziękujemy za wysłanie formularza.`;

    if(imie == '' || lastname == '') {
        message = `Formularz nie jest w pełni wypełniony. Proszę poprwić dane i spróbować ponownie.`;
    }

    document.querySelector('.message').innerText = message;
});