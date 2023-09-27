// Funções inesperiente, funções auto-invovada 
// IIFE -> Immediately inviked function expression


function qualqueCoisa() {

    console.log(12345678);
    
}

qualqueCoisa();

// Para nós criarmos uma função invocada automaticamente
(function (){

 const nome = "Eva";
 console.log(nome);


}) ();

(function ( idade, peso, altura){
const sobrenome = "Brandao";

  function criaNome(nome) {
    return nome + " " + sobrenome;

  }

  function falaNome() {
    
    console.log(criaNome("Eva"));
  }
   
falaNome();
console.log(idade, peso, altura);

   }) (30, 50.89, 1.60);

const nome = "qualqueCoisa";