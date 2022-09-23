// Crie uma arrow function que recebe um array de números e calcula a média deles

//Resposta exercicio 3

const arrayTeste = [1, 5, 7, 8, 9, 25];

let somaDaArray = 0,
  resultadoMedia;

const calculaMediaDaArray = (array = []) => {
  array.forEach( function (item) {
    somaDaArray += item;
    console.log(somaDaArray)
    resultadoMedia = somaDaArray / array.length;
    console.log(resultadoMedia)
  });
  return resultadoMedia;
};
console.log(calculaMediaDaArray(arrayTeste));



//Crie uma arrow function que recebe um array de números e retorne um array contendo apenas números positivos
//Exercicio 2 

const arrayTeste = [1, -5, 7, -8, 9, -25];
let arrayDePositivos = [],divPrincipal;
divPrincipal=document.getElementById("divPrincipal");
divPrincipal.innerHTML = `A array de teste é composta pelos números: ${arrayTeste}</br>`

const filtraNumerosPositivos = (array = []) => {
  array.forEach((item) =>{
    if(item >= 0){
      arrayDePositivos.push(item);
    }
  });
  return arrayDePositivos;
};
console.log(filtraNumerosPositivos(arrayTeste));