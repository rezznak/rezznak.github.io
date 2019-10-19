const form = document.getElementById('formularz');
form.addEventListener('submit', => {
    const data = document.getElementsByTagName('name');
    const fname = data[0].value;
    const lname = data[1].value;
    console.log('data');

}) 