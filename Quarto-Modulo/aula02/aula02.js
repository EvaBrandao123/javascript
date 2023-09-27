// Metodo Split-> faz o que pop e push, unshift, shift faz 
//           -4       -3       -2         -1
//              0       1       2        3
const nomes = ["Eva", "Maria", "ana", "Aguinaldo"];
//nome.plice(indice(começo), delete(quanto quero remover), element1,
// element2(elementos que quero adivionar))
// pop

const remove = nomes.splice(2, 2, "Eva", "Lindalva");
//const remove = nomes.splice(3, 1); simula o pop-> remove no final
//const remove = nomes.splice(0, 1); simula shift-> remove no começo
//const remove = nomes.splice(nomes.length, 0, "Lindalva"); simula push -> adiciona no final
//const remove = nomes.splice(0, 0, "MIranda", "Sei la");simula unshift-> adiciona no começo
console.log(remove);
console.log(nomes);