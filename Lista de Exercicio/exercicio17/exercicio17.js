//17. Implemente uma função que receba um array de números e retorne 
 //um objeto com informações sobre esses números (soma, média, máximo e mínimo).


 function operacoes() {
    
 const numeros = [5, 7, 3, 89, 8, 2, 4];
 let soma = 0;
 let quantidade = 0;
 let maximo ;
 let minimo ;

 for(let i = 0; i < numeros.length; i++){
let numero = numeros[i];
 soma += numero;
 quantidade++;

 if(numero > maximo && numero > minimo){
maximo = numero;
minimo = minimo;

 } 
 

 };

 media = (soma)/ quantidade;


return{

soma,
quantidade,
media, 
maximo,
minimo


}


 }

 console.log(operacoes());