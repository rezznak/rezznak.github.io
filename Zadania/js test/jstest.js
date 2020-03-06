let btn = document.getElementById("fibb");



const entyElement = (n) => {

  let a = 0;
  let b = 1;

  if (n === 1) {return 0}

  else if (n === 2 || n === 3) {return 1}

  else if (n > 3) {
    for (i=0; i<=n-3; ++i) {
      let temp = a + b;
      a = b;
      b = temp;
       
    }
  }
  
  //console.log(wynik);
}

//btn.addEventListener("click",entyElement(4));
// let wynikPiate = entyElement(4);
// console.log(wynikPiate);
