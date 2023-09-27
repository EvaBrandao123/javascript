//9-Escreva uma função que some todos os números pares em um array.

function somaPares() {
    
    const Numeros = [5, 9, 9, 8, 8, 30];
    let somaPares = 0;
    let resolução;

    for(let i = 0; i < Numeros.length; i++){

        let numeros = Numeros[i];

       resolução = numeros % 2 == 0 ? somaPares = somaPares + numeros : "Não tem numeros pares";
    }

    return resolução;
}

console.log(somaPares());