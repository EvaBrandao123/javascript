
// Escreva uma função chamada ePaisagem que 
// que recebe dois argumentos, largura e altura
// de uma imagem (number)
// Retorne true se aa imagem estiver no modo 
//Paisagem

function ePaisagem(largura, altura) {
    
    return largura > altura ? true : false;
}

console.log(ePaisagem(1256, 789));

// Ou 

function ePaisagem(largura, altura) {
    
    return largura > altura;
}

console.log(ePaisagem(1256, 789));


// Ou com enronfunction

const Paisagem = (largura, altura) =>{

    return largura > altura;
}

console.log(Paisagem(234,900));