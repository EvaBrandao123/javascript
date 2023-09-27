const numero = Number(prompt("Digite um número: "));


const numeroTitulo = document.getElementById( "numero-titulo"); // eu quero obter um elemento por id

const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

texto.innerHTML = "";

texto.innerHTML = `<p> Raiz quadrada: ${numero ** (1/2)} </p>
<p> ${numero} é inteiro : ${Number.isInteger(numero)} </p>
<p> É NaN : ${Number.isNaN(numero)} </p>
<p>Arredondando para baixo: ${Math.floor(numero)}</p>
<p>Arredondando para cima: ${Math.ceil(numero)}</p>
<p>Com duas decimais: ${numero.toFixed(2)}</p>

`;


// Ou 

/*
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5} </p>`;
texto.innerHTML += `<p>${numero} é inteiro : ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p>É NaN : ${Number.isNaN(nnumero)} </p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p>Com duas decimais: ${numero.toFixed(2)} </p>`;

*/




