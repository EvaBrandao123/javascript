// Escreve uma função que recebe dois numeros e retorne o maior dele

function maior(min, max) {
    
if (min > max) {
    return min;

}else{

    return max;
}


}



function Main(min, max) {
    
  let maior = min < max ? max : min ;
    
    return maior;
    // Esse é o meu

}

console.log( Main(11, 9));

const max2 = (min, max )=> {
    
    return min > max ? min : max;

    // Esse é do Luiz 
}

console.log(max2(12, 89));

function max(x, y) {
    
    return x > y ? x : y;
}

console.log(max(34, 67));

