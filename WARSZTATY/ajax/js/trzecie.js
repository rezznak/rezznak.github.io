let koniecLicznik = 0;




window.onscroll = function () {

    let d = document.documentElement;
    // wysokosc okna przegladarki
    let innerHeight = window.innerHeight;
    // długość dokumentu
    let offsetHeight = d.offsetHeight;
    // odległość od góry strony
    let scrollTop = d.scrollTop;

    let sumScrollTopInnerHeight = Math.ceil(scrollTop + innerHeight);

    //let dataArrey = [];
    
    if (sumScrollTopInnerHeight >= offsetHeight) {
        let dataPack = fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(response => {
            console.log(response)}
        
        response.forEach( function(elementTablicy)) {
            let userData = document.body.div.createElement("p");
            let userTxt = document.createTextNode(`Użytkownik: ${response}`);
            userData.appendChild(userTxt);
            document.body.div.appendChild(userData);
        }
        });

        
         

        console.log("dojdziono razy:" + ++koniecLicznik);
    }
    

};

