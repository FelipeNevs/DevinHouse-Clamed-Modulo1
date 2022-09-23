/* Utilize o if ternário para construir uma função que recebe o número do dias 
e retorna se pertence a primeira ou a segunda quinzena */

const qualQuinzena = numero => numero<=15 ? "Pertence à primeira quinzena":"Não pertence à primeira quinzena "

console.log (qualQuinzena(2));
console.log (qualQuinzena(16));