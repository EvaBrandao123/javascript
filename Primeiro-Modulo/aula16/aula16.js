/*
               Aula de Array
const alunos = ["Ana", "Maria", "Eva", "João", 1,true, null];  isso vai 
funcionar mais não é uma boa pratica de programação num array colocar 
varios tipos de dados as strings são indexsados o array também, só que
o array é indexsado por elemento e as strings por cada letra que compoe 
uma frase ou nome 
ex: 
array             0       1       2       3
const alunos = ["Ana", "Maria", "Eva", "João"];

string        12345678910       
const nome = "Eva Brandão"

*/

const nome = "Eva Brandão";
console.log(nome[10]);


const alunos = ["Ana", "Maria", "Eva", "João"];

alunos[3] = "Nenuco"; // alterei o valor que esta no index 3

//Adicionar mais valores ao nosso array
alunos[alunos.length]= "Barbara";
alunos[alunos.length]= "Debora";
alunos[alunos.length]= "Fath";
alunos[alunos.length]= "Doga";

// Outra maneira de adicionar é : alunos[4]= "Brigida";
  // Outra maneira de adicionar é utilizar o metodo push() ele vai acrescenta no final do array

alunos.unshift("Fabio");  // adiciona no inicio
alunos.push("Marlene"); // adiciona no fim
const removido = alunos.pop(); // remove o ultimo index e o seu valor 
const remove = alunos.shift(); // remove o primeiro index e seu elemento
delete alunos[6]; // ele elimina o valor no index não o index, significa que o index 6 estara vazio

 


console.log(alunos);
console.log(alunos[2]);
console.log(alunos[3]);
console.log("O removido foi : ", remove);
console.log("O removido foi : ", removido);
console.log(alunos.slice(0,5));
console.log(alunos.slice(0,-4));
console.log(typeof alunos); // o array é considerado objecto por isso retornou object
console.log(alunos instanceof Array); // para saber se é um objecto ou array
