//Crie uma arrow function que recebe um array de números e calcula a média deles

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