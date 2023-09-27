// alert, confirm e promt
// quando uma função esta dentro de um objecto é chamado de metodo
// se estiver fora do objecto é chamado de função




//alert('Olá mundo')

// função confirm para confirmar algo do usuario, é usado para confimar ou negar algo

//confirm("Deseja continuar?") // ele retorna valores boolean ou true ou false

// função para pedir ao usuario digitar alguma coisa "Prompt"

//prompt("Digite o seu nome: ")

// o confirm e o prompt retorna algum valor mais o alert não

let num1 = prompt("Digite um numero: ");
let num2 = prompt("Digite um numero: ");

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;
                                 // temlate string
alert(`O resultado da sua conta é: ${resultado} `);

// outro exemplo
alert(`O resultado da sua conta é: ${num1 + num1} `);



