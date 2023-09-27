// string são indexadas ou seja cada sting tem seu index
//               12345678
let umaString = "Um 'texto'";
// ou 
 umaString = "Um \"texto\"";
 // a string é um array , cada letra ocupa um espaço na memoria do computador

console.log(umaString[4]); // pegar um determinado elemento 

// outra forma

console.log(umaString.charAt(4));// tras o valor na posição mencionada

console.log(umaString.charCodeAt(4)); //tras o valor em sei la nome bem esquisito
console.log(umaString.concat('', ' em ','',' um ', '', ' Lindo dia')); // concatena tem a mesma função que um sinal +
console.log(`${umaString} em um lindo dia`);

console.log(umaString.indexOf('texto')); // para saber qual é o index da palavra texto ou seja onde começa a pala texto

console.log(umaString.lastIndexOf('m',3)); // de tras para frente

console.log(umaString.match(/[a-z]/g)); // retorna para mim todas as consoantes da frase

console.log(umaString.search(/[a-z]/g)); // retorna o indice da primeira consoante
// simila ao indeOf

console.log(umaString.replace(/Um/,'Outro')); // substitui uma palavra pela outra 

console.log(umaString.length);// lenght é um atributo de string ela permite saber o tamanho 

console.log(umaString.slice(2,7));// fatiado
console.log(umaString.slice(-2));

console.log(umaString.substring(umaString.length - 7));

console.log(umaString.split( ' ' ));// acrescenta ou algo na frase

console.log(umaString.split( ' ', 3 ));

console.log(umaString.toLocaleUpperCase( ));// toda maiuscula

console.log(umaString.toLocaleLowerCase())// tudo em minuscula