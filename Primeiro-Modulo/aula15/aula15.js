// Objecto Math
//  ${Number.isInteger(numero)} para saber se um numer é inteiro ou não
// ${Number.isNaN(nnumero)} para saber se um numero é NaN ou não

let num1 = 9.;
let num2 = Math.floor(num1);  // arredonda para baixo
let num3 = Math.ceil(num1); // arrendondar para cima
 let num4 = Math.round(num1) // dependendo das casas decimais ele arredonda por defeito ou por excesso
console.log(num2);
console.log(num3); 
console.log(num4);

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // ele acha o maior número nessa sequencia de número

console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // ele acha o menor número nessa sequencia de número

console.log(Math.random()); // pega um numero aleatorio a função random

const aleatorio =Math.round(Math.random() * (10 - 5) + 5); // o random sorteia numeros com virgula já a função round ele trata de arredondar por excesso ou por defeito

console.log(aleatorio);

console.log(Math.pow(2,10)); // 2 elevado a 10 exponenciação
// ou console.log(2 ** 10); é a mesma coisa

console.log(num1 ** (1/2)); // para achar a raiz quadrada de um numero o ** significa elevação

console.log(100 / 0); // o resultado é infinity vai dar verdadeiro não é errado mais só o javascript faz isso

console.log(100/0.000000000000000000000000000);// é avaliado como true
// ${numero.toFixed(2)} para definir se o nosso numero vai ter quntas casas decimais 




