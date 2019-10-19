$(function(){
    let btn = $('#btn');
    btn.click(function){
        console
        $.getJson(
            $(".display").append("<p>" + dane + "</p>")
        )
    }
    
    function getData ()


    console.log(btn);

})



// od hansa
// $(function () {
//     let btn = $("#btn");
//     btn.click(function () {
//         console.log("działa klik")
//         $.getJson(

//             $(".display").append("<p>" + waszePobraneDane + "</p>");
//         )
//     })
// })