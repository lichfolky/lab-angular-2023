// DOMANDA 3
let saluto = "Ciao! "

let gatto = {
    verso: "miao",
    parla: function() {
        let puntoEscl = "!";
        console.log(saluto + this.verso + puntoEscl);
    }
}

let verso = "bao";
gatto.parla();

console.log(gatto);

// DOMANDA 4

let cane = {
    verso: "miao",
    parla: () =>  {
        console.log(saluto + this.verso);
    }
}

// Questo stampa undefined
cane.parla();


// DOMANDA 5

// scope blocco
for (let i = 0; i < 5; i++) {
    console.log(i)    
}

// fuori scope blocco
let j;
for (j = 0; j < 5; j++) {
    console.log(j)    
}

// scope 'globale'
//console.log("i"+ i); 
console.log("j: " +j);   



