class Animal {
    constructor(name, waga) {
        this.name = name;
        this.waga = waga;
    }

    describeAnimal = () => {
        console.log(`Zwierze ma na imie ${this.name}`);   
    }
}

class Dog extends Animal {
    constructor(imie, wagaPsa, iloscNog) {
        super(imie, wagaPsa);

        this.iloscNog = iloscNog;
    }

    describeDog = () => {
        this.describeAnimal();
        console.log(`I ma ilość nóg: ${this.iloscNog}`);   
    }    
}

let pies = new Dog("Fafik", 4)
// pies.describeAnimal();
pies.describeDog();
