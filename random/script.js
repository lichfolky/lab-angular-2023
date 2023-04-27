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

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

let buttonEl = document.querySelector("button");
let resultEl = document.querySelector(".result");

buttonEl.addEventListener("click", () => {
    resultEl.innerText = persone[getRandomIntInclusive(0, persone.length - 1)];
})
