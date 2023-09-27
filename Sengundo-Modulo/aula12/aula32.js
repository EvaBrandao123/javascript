//Atribuição via desestruturação
// ... tres ponto chama-se rest ele pega o resto das coisas
// os mesmos tres pontos quando voce chama no sentido de espalhar ele se torna spread

/*

let a = "A"; //B
let b = "B"; //C
let c = "C"; //A

const letras = [b, c, a];
 [a, b, c] = letras ; // atribuição via desestruturação

console.log(a, b, c);

*/

//               0  1  2  3  4 5  6  7  8
const numeros = [100, 200, 300,400,500,600,700,800,900];
 /*
const [um, dois , tres,  ...resto] = numeros; nos permite criar as variaveis e elas 
vão obter os valores que se encontram no array é uma maneira de obter os valores do array
 sem precisar criar monte de codigos*/

 const [um, , tres, , cinco, , sete, ...resto] = numeros;

console.log(um , tres, cinco, sete);
console.log(resto);

//                  0           1          2
//               0  1  2    0  1  2    0  1  2  
const numero = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [, [, ,seis ]] = numero;
/*Outra maneira de fazer
const [lista1, lista2, lista3] = numero;

console.log(lista3[2]);
Isto é Atribuição via desestruturação
*/

console.log(seis);
console.log(numero[1][2]); // acesei o valor 6 que se esncontra no segundo array


