let osobaOb = {
    imie: 'Adam',
    plec: 'M',
    wiek: 36,
    zawod: 'programista',
    przedstawSie: function() {
        return `Cześć, jestem ${this.name} i mam ${this.wiek} lat. Zawód wykonywany to: ${this.zawod}.`;
    }
};
const index = 'imie';
console.log(osobaOb.index, osobaOb[index]);

let wynikDzialaniaMetody = osobaOb.przedstawSie();
console.log(wynikDzialaniaMetody);