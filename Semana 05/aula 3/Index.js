//Exercicio 1 

//Utilize o If ternario para contruir uma função que recebe o numero de dias e retorna se o numero pertence a primeira ou a segunda semana

const qualQuinzena = numero => numero<=15 ? "Pertence à primeira quinzena":"Não pertence à primeira quinzena "

console.log (qualQuinzena(2));
console.log (qualQuinzena(16));


//Exercicio 2

//Crie um arraw fuction que recebe um array e localize o numero de maior valor 

var array = [-10, -20, -30, -120, -1000];

const localizarMaior = (array=[]) => {
    var maior = array[0];
    array.forEach(item => {
        if (item > maior) {
            maior = item;
        }
    });
    return maior;
}

console.log(`O maior valor é ${localizarMaior(array)}`);

//Exercicio 3

//Crie uma arrow function que receba 2 arrays 
//e retorne um array contendo os dois

var array1 = [-10, -20, -30, -120, -1000];
var array2 = ['Silas', 'Glauco', 'Andre', 'Astor', 'Felipe', 'Eduardo', 'Kayra'];

const juntarArrays = (lista1=[], lista2=[]) => lista1.concat(lista2)

console.log(juntarArrays(array1, array2));

//exercicio 4

//Crie um array functions que ordena um array de numeros


let array = [19,50,2,1,99]
const ordenaArray = (array=[]) => {
    return array.sort((a,b)=>a-b)
}
console.log(ordenaArray(array))

//Exercicio 5 

//Crie uma array function que receba um numero, calcule sua raiz quadrada e retorne um n* inteiro positivo como resultado.

const calcularRaizQuadrada = numero => {
    if(numero<0){
        return "Não é um número válido";
    }
    else{
    let raiz = Math.sqrt(numero);
    return Math.trunc(raiz);
    }
}

console.log(calcularRaizQuadrada(9))
console.log(calcularRaizQuadrada(-2))


//exercicio 6

/* Crie uma arrow function que receba uma string 
e devolva um objeto com as informações: 
quantos caracteres a string possui
qual seu primeiro caracter 
e qual seu último caracter */

const contString = ((string= {}) => {
    let tamanhoChar = string.length;
    let primeiroChar = string.substring(0,1);
    let ultimoChar = string.substring(tamanhoChar-1, tamanhoChar);

    const objetoChar = {
        qtdChar: tamanhoChar,
        primeiraLetra: primeiroChar,
        ultimaLetra: ultimoChar
      };
     return objetoChar 
});

console.log(contChar('Palavra'));