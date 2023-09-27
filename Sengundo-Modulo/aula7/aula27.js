// Operador Tenario
// (condição) ? "Valor verdadeiro" : "Valor para Falso"
const pontuacaUsuario = 7847;
const nivelUsuario = pontuacaUsuario >= 1000 ?  "Usuario VIP" : "Usuario Normal";

console.log(nivelUsuario);

const corUsuario = "null";
const corPadrao = corUsuario || "Preta";

console.log(corPadrao);
/* 

if(pontuacaUsuario >= 1000){

console.log("Usuario VIP");

} else{

    console.log("Usuario Normal");
}
*/


