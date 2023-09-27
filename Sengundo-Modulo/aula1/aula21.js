// Operadores de Comparação

/*
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualidade (= atribuição)******* não utilizam
=== igualidade estrita(valor e tipo)
!= diferente (valor)********** 
!== diferente estrita (valor e tipo)


*/

const expressao = 10 > 5;
const comp = 10 >= 5; // continua retornar verdadeiro pois vais verificar se uma das condições é verdade e se for vai aparecer verdadeiro
const te = 19 <= 12;
const num1 = 45;
const num2 = 34;
const resultado = num1 <= num2;

// ==
const nu1 = 12; // Number
const nu2 = "12"; // string
const res = nu1 == nu2;

// aqui mostra claramente a diferença entre == e === um verifica o valor já o outro verifica o valor e o tipo de dados

// ===
const n1 = 12; // Number
const n2 = "12"; // string
const re = nu1 === nu2;

console.log(re);
console.log(res);
console.log(resultado);
console.log(te);
console.log(comp);
console.log(expressao);

