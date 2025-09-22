let frutas = ["maçã", "banana"];
frutas.push("laranja");      // adiciona ao final
frutas.unshift("uva");       // adiciona ao início
console.log(frutas);         // ["uva", "maçã", "banana", "laranja"]

console.log("Tamanho:", frutas.length); // 4
console.log("Primeira fruta:", frutas[0]); // "uva"
console.log("Última fruta:", frutas[frutas.length - 1]); // "laranja"

frutas.pop();                // remove "laranja"
frutas.shift();              // remove "uva"
console.log(frutas);         // ["maçã", "banana"]

const obj1 = {
  nome : "Leandro",
  matricula : "202501"
}
const obj2 = {
  nome : "Maria",
  matricula : "202502"
}

var objetos = [];
objetos.push(obj1);
console.log(objetos);
objetos.push(obj2);
console.log(objetos);

