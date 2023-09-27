// exercicio da aula 12
// innerHTML refere-se ao HTML que está dentro do body


const nome = prompt("Digite o seu nome completo: ");
document.body.innerHTML += `O Seu nome é <b> ${nome}</b> <br/>`;
document.body.innerHTML += `O Seu nome tem <b> ${nome.length} </b> letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é <b> ${nome[1]}</b>  <br/>`;
document.body.innerHTML += `Qual é o primeiro índice da letra no seu nome <b> ${nome.indexOf("a")} </b> <br/>`;
document.body.innerHTML += `Qual é o último indice da letra no seu nome <b>  ${nome.lastIndexOf("a")} </b>   <br/>`;
document.body.innerHTML += `As últimas 3 letras no meu nome são: <b> ${nome.substring(nome.length - 3)} </b> <br/>`;
// ou document.body.innerHTML += `As últimas 3 letras no meu nome são: <b> ${nome.slice(-3, nome.length)} </b> <br/>`;
document.body.innerHTML += `As palavras do meu nome são: <b> ${nome.split(' ')}  <br/>`;
document.body.innerHTML += `Meu nome com letras maiúsculas: <b> ${nome.toLocaleUpperCase()} </b>  <br/>`;
document.body.innerHTML += `Meu nome com letras minúsculas: <b> ${nome.toLocaleLowerCase()}  </b> <br/>`;
