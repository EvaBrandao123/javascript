//6. Dado um array de números, encontre o número máximo.

function maximo() {

    const numeros = [89, 9, 4, 6, 7 ,23];
    let maximo = 0;

    for(let i = 0; i < numeros.length; i++){

        let numero = numeros[i];
    numero > maximo ? maximo = numero : maximo;
    }

 return maximo;
}

console.log(maximo());