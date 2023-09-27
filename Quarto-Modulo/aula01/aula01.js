//Revisão de arrays
//valor por referencia os arrays são passados assim
 //              0      1        2      3            4        5
const nomes =  ["Eva", "Ana", "Maria", "Margarida", "Paula","Linda"]; // esse é um array literal
const nome  = new Array("Eva", "Ana","Maria")// funciona da mesma forma como a literal
const novo = nomes; /*tudo que eu colocar no array nomes sera refletido em novos
e tudo que eu colocar em novo sera refletido em nomes 

const novo = [...nomes]; neste momento esztou a fazer uma copia, então oque eu
alterar na variavel novo não vai refletir no array nomes
*/


// Funciona para String, Objectos, Funções, Numeros
nomes[2] = "Mado";
/* delete nomes[2];o delete pode ser usado quando queres eliminar o
valor que esta naquela posição, mas não queres o espaço vai existir o espaço
mais aquele espaço estara vazio, tanto é que vai aparecer a mensagem <1 empty item>
*/
console.log("\n........Remover um nome no final...............");
const removido = novo.pop();// elimina o ultimo indice do array e o seu valor também
console.log(nomes);
console.log(novo, " e o removido do array é: ",removido);

console.log("\n........Remover um nome no começo...............");

const remove= nomes.shift();// remove do começo
console.log(" e o removido do inicio foi: ", remove);

console.log("\n.......Adicionar um nome no final............");

nomes.push("Miranda");// adiciona no final do array
console.log(nomes);

console.log("\n.......Adicionar um nome no começo............");

nomes.unshift("Alan");// adiciona no principio do array
console.log(nomes);

console.log("\n........Fatiar o array...........");

const fatiar = nomes.slice(1,3); // aqui ele so vai pegar o 1 e o dois
// não vai pegar o tres
console.log(fatiar);

console.log("\n.......Tansformando String em array ............");

// Posso converte uma string num array
const nomeCompleto = "Eva Linda Rosinho Brandão";
const nomeSeparado = nomeCompleto.split(" ");
console.log(nomeSeparado);

console.log("\n......Tansformando array em String.............");

// array transformar em string
const array = ["Eva Linda Rosinho Brandão"];
const string = array.join(" ");
console.log(string);

