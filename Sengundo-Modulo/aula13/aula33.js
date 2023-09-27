const pessoa = {
nome: "Eva",
sobrenome: "Brandão",
idade: 19,
endereço:{
    Quarteirão: "M",
    numeroPredio: 2,
    numeroApartamento: 43
}

};
//const nome = pessoa.nome; Atribuição normal
//const {nome: teste, sobrenome, idade} = pessoa --> aqui automaticamente 
// o valor que esta no nome dentro do objecto passara para a variavel teste

/*const {nome: teste, sobrenome, idade, endereço: {Quarteirão, numeroApartamento}, endereço} = pessoa--> Atribuição via
 Desestruturação, porque esse nome? porque você sta a dizer assim
 olha extrai desse objecto o seu nome, também podemos criar as chaves
 e atribuir valores como fiz ai, o nome, sobrenome, idade recebem o nome 
 de chaves 

 console.log(teste, sobrenome, idade, Quarteirão, numeroApartamento, endereço);
 */

 const {nome, ...resto} = pessoa;

console.log(nome, resto);