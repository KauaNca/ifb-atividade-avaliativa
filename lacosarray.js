// Código lacoscomarray.js

let frutas = ["maçã", "banana", "laranja", "uva", "melancia"];

console.log("FOR:");
for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta na posição ${i}: ${frutas[i]}`);
}

console.log("WHILE:");
let j = 0;
while (j < frutas.length) {
  console.log(`Fruta na posição ${j}: ${frutas[j]}`);
  j++;
}

console.log("DO...WHILE:");
let k = 0;
do {
  console.log(`Fruta na posição ${k}: ${frutas[k]}`);
  k++;
} while (k < frutas.length);


// versão alternativa do FOR, adequada para array de objetos
console.log("FOR...OF:");
for (let fruta of frutas) {
  console.log("Fruta:", fruta);
}