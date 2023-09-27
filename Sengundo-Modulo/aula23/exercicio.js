/*
escreva uma função que recebe um numero e
retorne o seguinte:
Numero é divisivel por 3 = Fizz
Numero é divisivel por 5 = Buzz
Numero é divisivel por 3 e 5 = FizzBuzz
Numero Não é divisivel por 3 e 5 = Retorna o proprio numero
Checar se o numero é realmente um numero= Retornar o proprio numero 
Use a funçaõ com numeros de 0 á 100

*/

function Fizz(numero) {

    if(typeof numero !== "number")return NaN;
    if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
    if (numero % 3 === 0) return "Fizz";
    if (numero % 5 === 0) return "Buzz";
  
    return numero;
  
}

for (let index = 0; index <= 100; index++) {
 console.log(index, Fizz(index));
    
}