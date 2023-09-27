// 
const numeros = [1, 2, 3, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
     
    if (numero === 2) {
        console.log("Pulei o numero 2");
        continue; // ele vai eliminar o dois, mas o continue cvai permitir o codigo não parar, continuar na sua execução normal. 
    }

    if (numero === 7) {
        console.log("Encontrei o 7, saindo");
        break; // ele para a executar o codigo, sem mesmo ter terminado.
     /*A diferença é que o continue executa a condição e continua com o percurso do codigo, continua no laço ate terminar, já o break quando executa 
      a condição ele para o codigo */
    }
    console.log(numero);

}

console.log("\n Outra função");
// Mesma coisa com o primeiro bloco, varias formas de fazer

for (let i = 0; i <= numeros.length ; i++) {

let numero = numeros[i];

if (numero === 2) {
    console.log("Pulei o numero 2");
    continue; // ele vai eliminar o dois, mas o continue cvai permitir o codigo não parar, continuar na sua execução normal. 
}


if (numero === 7) {
    console.log("Encontrei o 7, saindo");
    break; // ele para a executar o codigo, sem mesmo ter terminado.
 /*A diferença é que o continue executa a condição e continua com o percurso do codigo, continua no laço ate terminar, já o break quando executa 
  a condição ele para o codigo */
}
console.log(numero);

}


console.log("\n Outra função");



let i = 0;
while (i< numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log("Pulei o numero 2");
        i++;
        continue; // ele vai eliminar o dois, mas o continue cvai permitir o codigo não parar, continuar na sua execução normal. 
    }

    console.log(numero);

    if (numero === 7) {
        console.log("Encontrei o 7, saindo");
        i++;
        break; // ele para a executar o codigo, sem mesmo ter terminado.
     /*A diferença é que o continue executa a condição e continua com o percurso do codigo, continua no laço ate terminar, já o break quando executa 
      a condição ele para o codigo */
    }
   
    i++;


}


console.log("\n Outra Função");

let index = 0;
do {

    let numero = numeros[i];

    if (numero === 2) {
        console.log("Pulei o numero 2");
        index++;
        continue; // ele vai eliminar o dois, mas o continue cvai permitir o codigo não parar, continuar na sua execução normal. 
    }

    console.log(numero);

    if (numero === 7) {
        console.log("Encontrei o 7, saindo");
        index++;
        break; // ele para a executar o codigo, sem mesmo ter terminado.
     /*A diferença é que o continue executa a condição e continua com o percurso do codigo, continua no laço ate terminar, já o break quando executa 
      a condição ele para o codigo */
    }
   
    index++;
    
} while (index< numeros.length);
