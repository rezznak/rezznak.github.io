//let jsonString = '{"pracownicy": [{"firstName": "Krystian","lastName": "Dziopa"},{"firstName": "Anna","lastName": "Szapiel"},{"firstName": "Piotr","lastName": "Żmuda"}]}';

let jsonString = '{"pracownicy":[{"firstName": "Krystian", "lastName": "Dziopa"},{"firstName": "Anna", "lastName": "Szapiel"},{"firstName": "Piotr", "lastName": "Żmuda"}]}';

let jsonPracownicy = JSON.parse(jsonString);
//console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function(element, index) {

    
    console.log(element, index);
});

