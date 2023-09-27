// forEach -> so esta dispnivel dentro de arrays

const a1 = [2,6,8,9,3,43,9];


for(let valor of a1){ // esse for eu entendo como: pega os valores de(of) a1
    // ou seja, estou a pegar os valores do a1 e colocar na variavel que eu crie
    // e  esta variavel vai receber e apresentar os valors dentro dela

    console.log(valor);
}

// O forEach ele é muito similar com a map, reduce e filter so que ele apenas intera
// sobre os valores, ele não vai fazer nada, ele não vai retornar um novo valor
// ele so vai fazer o que o for faz ai no exemplo de cima
console.log("\n... forEach");

a1.forEach( valor => console.log(valor));

// Simulação de reduce
console.log("\n... Simulação de reduce");
let total = 0;
a1.forEach(valor => {
total = total + valor;

});

console.log(total);
