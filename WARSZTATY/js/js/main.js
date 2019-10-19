const change = document.getElementById('change');

change.addEventListener('click', () => {
    let par1 = document.getElementById("par1");
    let par2 = document.getElementById("par2");
    par1.classList.add("color1");
    par2.classList.add("color2");

})

///// prostsze

// const colors = [
//    'red',
//    'yellow'
//]

// const btn = document.getElementsByTagName('button')[0];
// const p = document.getElementsByTagName('p');
// const ustawTlo = () => {
//     p[0].style.backgroundColor = 'red';
//     p[1].style.backgroundColor = 'yellow';

//     //[..p].forEach(element, index) => {
//         element.style.backgroundColor = colors[index];
//     }
// }