/* Avaliação de curto circuito

&& -> Todas expressões precisam ser verdadeira para retornar true
|| -> Uma delas precisa ser verdadeira para retornar true, se as duas forem false então é false o resultado

Failsy
* false 
0
 ´´ "" ''
 null / undefied
 NaN
*/

console.log("Eva" && '' && "Maria");

function FalaOi(){
    return "Ola";

}
const vaiExecutar = false ; 

console.log(vaiExecutar && FalaOi());

console.log( 0 || false || null || "Eva" || true); // retornou o primeiro valor verdadeiro que encontrou


const corUsuario = null;
const caUsuario = "Bebe"
const corPadrao = corUsuario || caUsuario || "Preto";

console.log(corPadrao);

console.log("\n");


const a = 0;
const b = null;
const c = "False";
const d = false;
const e = NaN;

console.log(a || b || c || "Eva B" || e);



