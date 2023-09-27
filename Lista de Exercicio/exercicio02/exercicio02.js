// -2. Escreva uma função que calcule a média de um array de números

function media() { 
    const numeros = [6, 7, 4, 8, 9, 3, 5];
    let soma = 0;
    let quantidade = 0;
    
    for(let i= 0; i < numeros.length; i++){
    
     soma = soma + numeros[i];
     quantidade++;
    
    }
     
    let media = (soma)/quantidade;
    return media; 
    }
    
    console.log(media());
    