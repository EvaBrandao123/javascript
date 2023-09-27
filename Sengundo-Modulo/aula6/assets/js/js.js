// capturar evento submit do formulario

const form = document.querySelector(".form");

form.addEventListener('submit', function (evento) {
evento.preventDefault();// para não permitir o formulario ser enviado

const inputPeso = evento.target.querySelector("#peso");
const inputAltura = evento.target.querySelector("#altura");

const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);

if(!peso){

   SetResultado("Peso invalido" , false);
   return; 
}

if(!altura){

   SetResultado("altura invalido" , false);
   return; 
}

const IMC = getIMC(peso, altura);
const nivelIMC = getNivel(IMC);

const msg = `Seu IMC é ${IMC}  (${nivelIMC}).`;

SetResultado(msg, true);

// continua o codigo
});

function getNivel(IMC){

const nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso", 
"Obesidade grau 1", "Obesidade grau 2","Obesidade grau 3"];

if(IMC >= 39.9) return nivel[5];
if(IMC >= 34.9) return nivel[4];
if(IMC >= 29.9) return nivel[3];
if(IMC >= 24.9) return nivel[2];
if(IMC >= 18.5) return nivel[1];
if(IMC < 18.5) return nivel[0];
}


function getIMC(peso, altura){

   const IMC = peso / altura **2;

   return IMC.toFixed(2);

}

function criaP(){

  const p = document.createElement('p'); // cria um elemento no html o createElement
  return p;

}


function SetResultado(msg, isValid){
const resultado = document.querySelector(".resultado");
resultado.innerHTML = '';

const p = criaP();

if(isValid){
   
   p.classList.add("paragrafo-resultado");

} else {

   p.classList.add("bad");
}

p.innerHTML = msg;
resultado.appendChild(p); // appendChild insere um elemento

}


