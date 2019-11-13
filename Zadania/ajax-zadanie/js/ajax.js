let btn = document.getElementById("getData");



const getDataPack = () => {
    
    let dataPack = fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(response => response.json())
        .then(response => {
            let dataDiv = document.createElement("div");
            dataDiv.setAttribute("id","Dane-programisty");
            let dataPar = document.createElement("p");
            let dataText = document.createTextNode("Imię i nazwisko: " + response.imie + " " + response.nazwisko + " zawód: " + response.zawod + " firma: " + response.firma + ".");

            dataPar.appendChild(dataText);
            dataDiv.appendChild(dataPar);
            document.body.appendChild(dataDiv);

        });
};
btn.addEventListener("click", getDataPack);