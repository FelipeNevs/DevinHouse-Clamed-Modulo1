const promise = new Promise((resolve, reject) => {
    let deuCerto = false;
    if (deuCerto) {
      resolve(setTimeout(() => {
        console.log('Ola, deu tudo CERTO.');
      }, 5000)); // É uma função - Pode receber uma função
    } else {
      reject(setTimeout(() => {
        console.log('Ola, deu tudo ERRADO.');
      }, 5000)); // É uma função
    }
  });
  
  console.log('Daqui a pouco voce vai receber um ola.');