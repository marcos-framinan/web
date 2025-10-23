let sum = 0;
for (let i = 1; i <= 100; i += 1) {
  if (i % 2 == 0) {
    sum += i;
  }
}

console.log("La suma de los números pares entre 1 y 100 es:", sum);

const numero = parseInt(6)

console.log("Tabla de multiplicar del 6");
for (let i = 1; i <= 10; i += 1) {
  console.log("6 x ", i, "=", 6*i);
}


const frase = "Mañana voy a una fiesta!";
let contador = 0;
const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";

for (let letra of frase) {
  if (vocales.includes(letra)) {
    contador += 1;
  }
}

console.log("La frase tiene", contador, "vocales!");

let fib = [0, 1];

for (let i = 2; i < 20; i += 1) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

console.log("Los primeros 20 números de Fibonacci son:");
console.log(fib.join(", "));
// No he conseguido pedir el valor al usuario, todas las maneras daban error, entoces puse yo un número. Me aparecía el error Cannot find module "readline-sync"