let kolekcjaAut = [];



class Samochod {
    constructor(marka, model, silnik, przebieg, rok, kolor) {
        this.marka = marka;
        this.model = model;
        this.silnik = silnik;
        this.przebieg = przebieg;
        this.rok = rok;
        this.kolor = kolor;
    }

    /*wyswietlInfo() {
        console.log(`
            Samochod\n
            Marka: ${this.marka}\n
            Model: ${this.model}\n
            Silnik: ${this.silnik}\n
            Przebieg: ${this.przebieg}\n
            rok: ${this.rok}\n
            Kolor: ${this.kolor}
        `);
    }*/

        wyswietlInfo() {
            document.body.insertAdjacentHTML('beforeend', `
                Samochod\n
                Marka: ${this.marka}\n
                Model: ${this.model}\n
                Silnik: ${this.silnik}\n
                Przebieg: ${this.przebieg}\n
                rok: ${this.rok}\n
                Kolor: ${this.kolor}
                <br>
            `);
        }
    

    zapiszDoBazy() {
        kolekcjaAut.push(this);//dodaje bieżący obiekt do kolekcji
    }
}


let auto1 = new Samochod(
    'BMW',
    'X6',
    'diesel',
    240000,
    2012,
    'zielony'
);

auto1.wyswietlInfo();
auto1.zapiszDoBazy();

auto1 = new Samochod(
    'Audi',
    'A6',
    'diesel',
    320000,
    2004,
    'czarny'
);


auto1.wyswietlInfo();
auto1.zapiszDoBazy();

auto1 = new Samochod(
    'Toyota',
    'Land Cruiser',
    'benzyna',
    440000,
    1999,
    'czarny'
);

auto1.wyswietlInfo();
auto1.zapiszDoBazy();

console.log(kolekcjaAut[0].marka);

kolekcjaAut.forEach(function(elementTablicy, indexTablicy){
    console.log(elementTablicy);
    console.log(elementTablicy.marka, elementTablicy.model, elementTablicy.kolor, indexTablicy)
});

//console.log(kolekcjaAut);
// w domu pieski :D