// exercicios
// IIFE função auto invocada
function funcao(){

  const form = document.querySelector(".form") ; 
  const resultado = document.querySelector(".resultado");
  const pessoas = [];

  // queryselector permite selecionar atraves do id, da class ou da tag
    

  /*
  form.onsubmit = function (evento){

evento.preventDefault(); // prevenir
alert(1);
console.log("Foi enviado.");
*/

function recebeEventoForm(evento) {

  evento.preventDefault();
 const nome = form.querySelector(".nome");
 const sobrenome = form.querySelector(".sobrenome");
 const peso = form.querySelector(".peso");
 const altura = form.querySelector(".altura");

 pessoas.push({

   nome: nome.value,
   sobrenome: sobrenome.value,
   peso: peso.value,
   altura: altura.value

 });


 console.log(pessoas);

 resultado.innerHTML +=`<p>${nome.value}  ${sobrenome.value}  ${peso.value}  ${altura.value} </p>`;

}

form.addEventListener("submit", recebeEventoForm); // form adicione um escutador de evento no meu meu formulario

  };

funcao();