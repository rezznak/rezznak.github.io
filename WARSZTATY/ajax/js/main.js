
const getData = () => {

    // sprobuj napisac if do czyszczenia
    //document.querySelector("ul").outerHTML = "";

    
    
    let dataPack = fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(response=>{
        console.log(response);
        let dataList = document.createElement("ul");
        // dataList.setAttribute("id", "lista");
        let liElement = document.createElement('li');
        let txtData = document.createTextNode("Id:" + response.id + "   Imię i nazwisko: " + response.name + "  Strona: " + response.website);
        liElement.appendChild(txtData);
        dataList.appendChild(liElement);

        document.body.appendChild(dataList);
    });
    
    
    
    
    console.log(dataPack);
};

// do przepatrzenia

// //console.log(document.getElementsByClassName('btn')[0]);
// let btn = document.getElementById('btn').addEventListener('click', getData);
// //console.log(btn);

// let pUserId = document.createElement('p');
// let pUserName = document.createElement('p');
// let pUserURL = document.createElement('p');

// pUserId.innerHTML = "User ID: " + response[i].id;
// pUserName.innerHTML = "User Name: " + response[i].name;
// pUserURL.innerHTML = "User URL: http://" + response[i].website + "<br>--------";

// document.body.appendChild(pUserId);
// document.body.appendChild(pUserName);
// document.body.appendChild(pUserURL);


// --------------------------




// $(function () {
// let btn = $("#btn");
// btn.click(function () {
// console.log("działa klik")
// $.getJson(

// $(".display").append("<p>" + waszePobraneDane + "</p>");
// )
// })
// })