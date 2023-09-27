/*For in --> lê os indices ou chaves do objecto
// indice é no array, vector ou matriz
// chaves é no objecto 
                0       1       2        3
const Frutas  = ["Laranja", "Uva", "Manga", "Limão"];

for (let i in Frutas){
    console.log(Frutas[i]);
    console.log(i); // esta lendo os indices do meu vector

}



for (let i = 0; i < Frutas.length; i++) {
console.log(Frutas[i]);
    
}
*/

// Obejcto usando o For in
const pessoa = {
    nome: "Eva",
    sobrenome: "Brandão",
    idade: 19
};

console.log(pessoa.nome);

// outra maneira de pegar o valor dentro da chave nome
console.log(pessoa["nome"]);

// outra maneira de pegar o valor dentro da chave nome dessa vez criando uma variavel
const chave =  "nome";
console.log(pessoa[chave]);
 console.log("\n-----------------")

for (let chave in pessoa){
    //console.log(pessoa[chave]); Apresenta os valores da chaves
    
    console.log(chave,pessoa[chave]);// aqui ele tras as chaves e seus respetivos valores

}

