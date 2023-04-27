let persone = ["Toselli Ivan",
"Mazza Giovan Battista",
"Aloisi Matteo",
"Gennaro Luca",
"Volpin Giada",
"Pierantozzi Giulia",
"Andresini Giovanni",
"Casaccia Mirko",
"Scimeca Flavio",
"Bono Maya",
"Salcedo Fabian",
"Pinto Flavio",
"Bucur Adrian",
"Barboza Pereyra Adriano",
"Silva Pablo",
"Saccon Caterina"]


// DOMANDA 1
console.log("for in: ");

for (const element in persone) {
    console.log(element);
}

console.log("for of: ");
for (const element of persone) {
    console.log(element);
}


let mattia = {nome:"mattia", cognome:"folcarelli", hobby: "gdr"};

console.log("");
console.log("for in oggetto: ");

for (const element in mattia) {
    console.log(element + ": "+ mattia[element]);
}

// 

const saluto = new Map([
    ["it", "Ciao"],
    ["en", "Hi"],
    ["fr", "Bonjour"],
]);

saluto.set("en","Hello");
saluto.set("es", "Hola");

let linguaCorrente = "en";
console.log(saluto.get("en"));

const colore = new Map([
    ["rosso", "#FF0000"],
    ["en", "Hi"],
    ["fr", "Bonjour"],
    ["es", "Hola"],
]);

document.body.innerText = saluto.get("en");
document.body.style.color = colore.get("rosso");


/*
  for (const entry of iterable) {
    console.log(entry);
  }
  // ['a', 1]
  // ['b', 2]
  // ['c', 3]
  
  for (const [key, value] of iterable) {
    console.log(value);
  }*/


