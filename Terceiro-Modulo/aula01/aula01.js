// Declaração de função (function hoisting)
// o hoisting ajuda a  
//Exemplo:

function falaOi() {

    console.log("oie");


}
falaOi();


// First-class objects (Objectos de primeira classe): pode tratar as funções como dados 
// Function expression

const souUmDado = function() {
    console.log("Sou um dado");// mostra como podemos passar uma funão numa variavel 
    //e a variavel se comportar como uma função
}

souUmDado();

function executar(funcao) { // parametro é como se fosse uma variavel da função
    console.log("Vou executar sua funçaõ abaixo");
    funcao(); // esse parametro que pode se comportar como função, ou podemos dizer
    // variavel que se comporta como função
}

executar(souUmDado); // o que isso vai fazer é passar tudo que esta na função souUmDado no parametro "funcao"

// Por issoa função em javascript é tratado como obejctos de primeira classe porque nós podemos tratar a função
// como um dado naturalmente

// Arrow Function-> recurso mais novo do Eqmascript
// è uma Function express

const funaoArrow = () =>{

console.log("Sou uma arrow function");

}

funaoArrow();// tamem é tratada com objecto de primeira classe ou são um dado

//Dentro de um objecto pode ter uma funcao

const obj ={
    falar: function(){
        console.log("Estou falando...");

    }
};
obj.falar();