// Operadores aritmeticos +(Adição e concatenação) - * 
//**(potenciação) 
// % resto da divisão

/* ordem de precedencia
()-->Parenteses
**--> Potenciação
* / % 
+ -
++ -->(Incremento)
-- ->(decremento)

operadores de atribuição
*=
+=
-=
**=

*/
const num1 = 3;
const num3 = 2;
const num2 = 3;

console.log(num1 + num2); 
console.log(num1 * num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

console.log(num1 + num2 * num3); 
// o valor munda pela ordem de precedencia 
console.log((num1 + num2) * num3);

let contador = 1;

// pos incremento
contador++; // 2
contador++; // 3
contador++; // 4

// pré incremento
++contador; // 2
++contador; // 3
++contador; // 4

/*  um contador não pode ter o tipo de dados const
 pois estará alterando o seu valor e sabemos que o 
 const é um valor que não muda */

console.log(contador);

let cont = 20;

console.log(cont--);
console.log(cont);

let dev = 20;
console.log(--dev);
console.log(dev);


const passo = 5;

let contar = 0;

contar += passo; // contar = contar + 5

console.log(contar);

const number1 = 10;
const number2 = 67;


