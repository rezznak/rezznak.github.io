let jsonObj = {
    id: 108,
    name: "Hans",
    sex: "male",
    hobby: ["pływanie", "czytanie", "śpiewanie", "programowanie"],
    friends: [
        {
            id: 109,
            name: "Ewa",
            sex: "female",
            hobby: ["czytanie", "jedzenie", "spanie"]
        },
        {
            id: 110,
            name: "Jaś",
            sex: "male",
            hobby: ["programowanie", "imprezowanie", "śpiewanie"]
        },
        {
            id: 111,
            name: "Marcin",
            sex: "male",
            hobby: ["śpiewanie", "podróżowanie", "programowanie"]
        }
    ],
};

jsonObj.hobby.forEach(function(hobbyElement) {
    // console.log(hobbyElement);
});

jsonObj.friends.forEach(function (friendElement) {
    console.log(friendElement);

    // for in do iteracji po polach obiektów
    for(let friendProperty in friendElement) {
        console.log();
        console.log(`${friendProperty}: ` + friendElement[friendProperty]);
    }

    // for of do iteracji po tablicach :)
    for(let hobbyElement of friendElement.hobby) {
        console.log(hobbyElement);
    }
;});