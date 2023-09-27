// For of mais usados em string e array que tem indices
//            123
const nome = "Eva";
const Nome = ["Eva", "Linda", "Ana", "Maria"];


// For Classico - Geralmente com iteraveis (array ou strings)
// For In - Retorna o indice ou Chave (Strings, array ou objectos)
// Fpr of - Retorna o valor em si (iteraveis, arrays strings )



for(let i = 0; i < nome.length; i++){
 // Esse for é um classico, 
    console.log(nome[i]);

}

console.log("\n -----------------")

for(let i in nome){
// in vai retornar indice e voce precisa do array 
    console.log(nome[i]);
}

console.log("\n -----------------")

for(let valor of nome){
// of vai te retornar só o valor
    console.log(valor); // Aqui se comporta de outra forma 
    //em vez de mostrar o indice ele traz logo o valor isso funciona 
    // em string como em array
}

console.log("\n -----------------")
// com array 
for(let valor of Nome){

    console.log(valor); // Aqui se comporta de outra forma 
    //em vez de mostrar o indice ele traz logo o valor isso funciona 
    // em string como em array
}

console.log("\n -----------------")

Nome.forEach(function(valor, indice, array){
    console.log(valor, indice , array);
});



const pessoa = {
    nome: "Eva",
    sobrenome: "Brandão"
};

for (let chave in pessoa){

    console.log(chave, pessoa[chave]);
};

