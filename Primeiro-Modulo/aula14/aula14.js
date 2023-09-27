// Number

let num1 = 1500; // number
let num2 = 2.8; //number 
let num3 = 45.0987654;
let num4 = 10.98; 

console.log(num1 + num2);

console.log(num1.toString() + num2); // toString é para converter para string, aqui
// ele concatenou pois o num1 se tornou string

// num1 = num1.toString(); Para converter para sempre o num1 em string

console.log(num1.toString(2)); // tras a representação binaria do numero, ou seja,
// converte o valor do num1 em binario

console.log(num3.toFixed(2)); // para determinar quantas casas depois do ponto
// podem aparecer e ele já arredonda 

console.log(Number.isInteger(num4)); // essa função te ajuda a saber se esse valor é inteiro e retorna true ou false, é usado 
//nos casos em que recebemos um dado vindo de uma base de dads ou de um outo lugar e queremos sabe qual é o tipo de dados

let temp = num1 * "Ola";
console.log(Number.isNaN(temp)); // permite saber se deu erro ou seja sempre que a conta for true 

// IEEE 754-2008  --> Padrão que o javaScript segue

let nu1 = 0.9;
let nu2 = 0.2;

nu1 += nu2; // nu1 = nu1 + nu2
nu1 += nu2;
nu1 += nu2;


console.log(nu1);





