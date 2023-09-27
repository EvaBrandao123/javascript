/*
Primitivos - string, boolean, undefined, null, number
bigint, symbol

valores primitivos são copiados quando passam o valor para 
outra variavel usando o sinal de atribuição

*/
//m          123     
let nome = " Eva ";
nome = "Brandão";
nome[0] = "G"; // isso não vai alterar pois as strings são imutaveis 
console.log(nome);


let a = "A";
let b = a; // copia

console.log(a, b);

a = "outra coisa ";
console.log(a, b);

console.log("\n");
// Tipo de dado que são passados por referencia que são mutaveis- Array, objecto e função

let z = [1, 3, 4];
let x = z;
let y = x;
console.log(z, x);

console.log("\n");

z.push(6);
console.log(z, x);

console.log("\n");

x.pop();
console.log(x, z);

 z.push("Victoria");
 console.log(y);


const pessoa = {
    nome: "Eva",
    sobrenome : " Brandão"
}

const pe = {...pessoa}; 

pessoa.nome= "BBBfamous";
console.log(pe,"\n", pessoa);
// como array, object e funtion são passado por referencia
// então para um valor ser passado como copia é necessario usar
// os tres pontos => (...) para copiar e não apontar na mesma memoria
// pois os valores não passadoos por referencia não aponta na mesma memoria so copiam


