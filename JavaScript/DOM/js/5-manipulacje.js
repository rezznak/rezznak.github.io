const mainHeader = document.getElementById('main-header');
const mainHeaderInner = mainHeader.innerHTML;

document.querySelectorAll('.super-link')[0].innerText = mainHeaderInner;
console.log(mainHeaderInner);
console.log(mainHeader.outerHTML);

// no idea ???

window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop >= (2 * window.innerHeight)) {
        console.log(mainHeader.dataset.category); //log z pobierania custom parametru
        mainHeader.style.fontSize = '40px';
        document.body.classList.add('scroll2');
        document.body.classList.remove('scroll');
    }
    else if(document.documentElement.scrollTop >= window.innerHeight) {
        console.log(mainHeader.dataset.category);
        mainHeader.style.fontSize = '10px';
        document.body.classList.add('scroll');
        document.body.classList.remove('scroll2');
    } else  {
        console.log(mainHeader.dataset.category);
        mainHeader.style.fontSize = 'initial';
        document.body.classList.remove('scroll', 'scroll2');

    }
});