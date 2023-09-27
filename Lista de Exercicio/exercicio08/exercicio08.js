// 8. Implemente uma função que remova os elementos duplicados de um array

// Aprendi hoje sore o set()-> é uma estrutura que aceita dados de diferentes
// tipos, so que ele tem que ser unicos, ela so permite que fiquem dados unicos


const nomes = ["Eva", 
"Linda", 
"MAria", 
"Linda", 
"Eva"];

const nomesUicos = new Set();

nomes.forEach((nome) => {

   nomesUicos .add(nome);


});

// aqui utilizamos o splace para espalhar o array
//console.log([...nomesUicos.values()]); no video que eu aprendi me mostrou assim
// mais sem o values os valores aparecem, não á necessidade disso 
console.log([...nomesUicos]);