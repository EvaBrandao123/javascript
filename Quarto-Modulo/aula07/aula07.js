// Filter+ Map+ Reduce

// Retorne a soma do doro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [3,8,45,23,9,0,4,3,2,6,1];

const pares = numeros.filter(function(valor){
if(valor % 2 === 0) return valor;
// [ 8, 4, 2, 6 ]
}).map(function(valor){
    return valor * 2;
// [ 16, 8, 4, 12 ]
}).reduce(function(acumulador, valor){
 return acumulador = acumulador + valor;

});

console.log(pares);

// convertendo em array Function
console.log("\n.... Numeros Pares");
const numerosPares = numeros.filter(valor => {
    if(valor % 2 === 0) return valor;
    // [ 8, 4, 2, 6 ]
    }).map(valor => valor * 2
    // [ 16, 8, 4, 12 ]
 ).reduce((acumulador, valor) => acumulador = acumulador + valor);
    
    console.log(numerosPares);
    
