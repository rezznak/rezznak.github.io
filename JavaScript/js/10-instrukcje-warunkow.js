const wiekAni = 24;
const wiekEli = 32;
let miesiac = 12;

if(wiekAni > wiekEli) {
    document.body.style.backgroundColor = 'red';
}
else if(wiekAni < wiekEli && miesiac == 9) {
    document.body.style.backgroundColor = 'green';
}
else {
    document.body.style.backgroundColor = 'blue';
}


switch(miesiac) {
    case 8:
        document.body.textContent = "Śierpień";
        break;
    case 9:
        document.body.textContent = "Wrzesień";
        break;
    case 10:
        document.body.textContent = "Październik";
        break;
    case 11:
        document.body.textContent = "Listopad";
        break;
    default:
        document.body.textContent = "A dajta mnie spokój!";
}