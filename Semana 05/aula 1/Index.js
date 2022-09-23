//Exercicio 1 

function voceClicou() {
    alert('A curiosidade matou o gato');
  }
  
  const botao1 = document.getElementById('botao');
  botao1.addEventListener("click", voceClicou);


// Exercicio 2 

function ePar (numero){
    if(numero%2==0){
        let par = true
        return par
    }
}

function eImpar(numero){
    if (numero%2==1){
        let impar = true
        return impar
    }
}

function arraysFiltradoParEImpar (array=[]){
    let arrayPares = array.filter (ePar);
    console.log(arrayPares);
    let arrayImpares = array.filter(eImpar);
    console.log(arrayImpares);
}
arraysFiltradoParEImpar([1,2,6,5,4,9,10])


