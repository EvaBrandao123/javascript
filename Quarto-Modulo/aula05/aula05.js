//Função Map -> alterar os valores do meu array, retorna um array novo

// Dobrar os numeros
const numeros = [4, 7, 4, 6 ,9, 0, 15, 78, 45, 22, 12, 34, 89];

const numerosEmDobro = numeros.map(valor => valor* 2);

console.log(numerosEmDobro);  

//Para cda elemento: 
// Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objecto
// Adicione uma chave id em cada objecto
const pessoas = [
    {nome: "Eva", idade: 19},
    {nome: "Brandão", idade: 21},
    {nome: "Linda", idade: 32},
    {nome: "Dadiva", idade: 59},
    {nome: "Maria", idade: 45},
    {nome: "Ana", idade: 29},
    {nome: "Evi", idade: 29}
    
    ];
    
    const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(function(obj){

return {idade: obj.idade};

    /*  Ou
    delete obj.nome;
return obj;
*/
});

const comIds = pessoas.map(function(obj, indice){

    //obj.id = indice + 1;
    const newObj= {...obj}; // para não alterar o array original, ou seja, os valores 
    // no array original
    newObj.id = indice;
    return newObj;
});
    console.log(nomes);
    console.log("\n............");
    console.log(idades);
    console.log("\n......");
    console.log(pessoas); // aqui mostra claramente como o array está e 
    // não esta como coo o inicio
    console.log("\n..........");
    console.log(comIds);

    // O map mexe no array original, toda transformação que foi feita aparecerá
    // no original, porque os dados são passados por referencia

