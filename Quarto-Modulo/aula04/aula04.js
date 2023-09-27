// Filter. Filtrando array-> funções, filter vai sempre retorna um array com 
 // a mesma quantidade do elementos ou menos


// Retorne os números maiores que 10~
//              0   1  2  3  4  5  6   7   8   9   10  11  12
const numeros = [4, 7, 4, 6 ,9, 0, 15, 78, 45, 22, 12, 34, 89];

function callBackFilter(valor, indice, array){

   return valor > 10;
   
    // Ou 
    /*
if(valor > 10){

    return true;

} else{

    return false;
}*/


}


const numerosFiltrados = numeros.filter(callBackFilter);
console.log(numerosFiltrados);

/* Uma maeira mais usual 

const numerosFiltrados = numeros.filter(function(valor){
   return valor > 10;
   
    // Ou 
    /*
if(valor > 10){

    return true;

} else{

    return false;
}

});

console.log(numerosFiltrados);

OU

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);
*/

/*
Retorne as pessoas que tem o nome com 5 letras ou mais
Retorne as pessoas com mais de 50 anos
Retorne as pessoas cujo nome termina com a
*/
const pessoas = [
{nome: "Eva", idade: 19},
{nome: "Brandão", idade: 21},
{nome: "Linda", idade: 32},
{nome: "Dadiva", idade: 59},
{nome: "Maria", idade: 45},
{nome: "Ana", idade: 29},
{nome: "Evi", idade: 29}

];



const pessoasComNomeGrande = pessoas.filter(function(obj){
return obj.nome.length >= 5;
});
console.log(pessoasComNomeGrande);

console.log("\n..........")
const pessoasIdade = pessoas.filter(obj => obj.idade > 50);
    console.log(pessoasIdade);

    console.log("\n..........")

const pessoasComA = pessoas.filter(function(obj){

    return obj.nome.toLowerCase().endsWith("a");// primeiro colocamos os 
    // nomes em minusculos e a função endWith ajuda a selecionar todos os nomes
    // com as letras que nós escolhemos

});
console.log(pessoasComA);
