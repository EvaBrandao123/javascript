// parametros 

// Função defiida com a palavra function tem uma variavel especial que se chama
// arguments que sustenta todos os argumentos enviados 
function funcao(a,b,c){

    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
        
    }
console.log(total, a,b,c);


}
funcao(1,3,2,4,5,6,7);// aqui é um argumento, argumento são valores dos parametro
// 

function fucao(a, b, c,d,e,f) {
    console.log(a,b,c,d,e,f)
}

fucao(1,2,3);

function somar(a,b=0, c=6 ) {
    b = b || 0;
     console.log(a + b + c);
}
somar(2,10);
// indepentenntemente do valor que foi atribuido para os parametro de forma direita
// apartir do momento que lhe é passado um argumento ele recebe o valor ou argumento que
// foi passado

// Objecto
function obj({nome, sobrenome, idade}) {
    console.log(nome,sobrenome,idade);

}
obj({nome:"Eva", sobrenome:"Brandão", idade:19});


// Array
function array([valor1, valor2,valor3]) {
    console.log(valor1, valor2, valor3);

}
array(["Eva", "Brandão", 19]);


function conta(operador, acumulador, ...numeros) {

    for(let numero of numeros){
 
 if(operador === "+") acumulador += numero;

 if(operador === "-") acumulador -= numero;
 
 if(operador === "*") acumulador *= numero;
 
 if(operador === "/") acumulador /= numero;
    }
     console.log(acumulador);
}
conta("/",0, 20, 9, 8, 34);

const count = function(operador,acumulador,numeros){

console.log(arguments);

}
count("+",4,8,5,3,8);


// não existe arguments numa função array function
const cout = (operador,acumulador,numeros) => {
console.log(operador, acumulador,numeros);

}
cout("+",5,7,7);

const cot = (...args) => {
console.log(args);

}
cot("+",5,7,7);

