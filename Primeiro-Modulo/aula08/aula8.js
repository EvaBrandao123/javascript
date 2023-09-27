// Tipos de Dados primitivos que são: Strings, number, undefined, null, boolean e symbol

const nome = "Eva "; // podemos criar string com aspas duplas
const nome1 = 'Eva'; // podemos criar string com aspas simples
const nome2 = `Eva `; // podemos criar string com crazes

const num1 = 10; // number
const num2 = 12.90; // number que é um valor flutuante

let nomeAluno; // undefined = não aponta para local nenhum na memoria
// é como se fosse um valor nulo
const sobrenomeAluno = null; // nulo que tambémnão aponta para local nenhum na memoria
// utiliza quando quer colocar valor de uma variavel nula

// Tipo de dados Boolean : True e False
const boolean = true; // ou False 
const aprovado = true; // Boolean = true , false( valores logicos)

console.log(typeof aprovado , aprovado);
console.log(typeof num2 ,  num2);
console.log(typeof nomeAluno , nomeAluno);
console.log(typeof sobrenomeAluno , sobrenomeAluno);

// tipo de dado passado por referecia e a diferença entre tipo de dados primitivo

 const a= [1, 2, 3];
 const b = a;

 console.log(a ,b);

 b.push(4);
console.log(a, b); // ou sejá o valor que nos acrescetamos na b 
// ira para a 

let an = 2;
const bn = an;

console.log(an, bn); // 2, 2

an = 4;

console.log(an , bn); // 4, 2 








