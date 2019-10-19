// po id

const section = document.getElementById('section1');
console.dir(section);

//po klasie

const links = document.getElementsByClassName('link');
console.dir(links);

for (let i = 0; i < links.length; i++) {
   // console.dir(i);
};

[...links].forEach((element, index) => {
  // console.log(element);
});

// po tagach HTML

const p = document.getElementsByTagName('p') ;
//console.log(p);

// po dowolnym selektorze
const divs = document.querySelectorAll('div');
console.log(divs);