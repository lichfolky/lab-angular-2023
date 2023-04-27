let stringa = "Lorem ipsum";
let array = [0,2];
console.log(stringa[3]);
console.log(stringa.length)

console.log(typeof stringa);
console.log(typeof array);

// DOMANDA 7

function stampaBrowser() {
    var nameBrowser = "Mozilla"; // scope locale 
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(nameBrowser); // use variable declared in the parent function
    }
    displayName();
}

stampaBrowser();

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();

// Currying DOMANDA 8

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}
// somma = f(5 + 2)
// somma = somma5(2)

function somma5(numero){
return 5 + numero;
}

// somma(5,2) = somma5(2)

const add5 = makeAdder(5);

const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12