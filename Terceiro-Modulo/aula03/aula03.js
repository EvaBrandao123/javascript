// Return -> Retorna um valor,termina a função

function soma (a, b) {
   return a + b;

}

function soma2(a, b) {
    console.log(a+b);
// o console não retorna nada, mas mostra o resultado, 
//ou seja ele apenas executa algo

}

soma2(4,8);

/*document.addEventListener("click",function() {

    document.body.style.backgroundColor = "gray";
    // esta função é um exemplo de função que não retorna nada,
    // mas que faz alguma coisa, muda a cor do fundo da pagina

});
*/

function criapessoa(nome, sobrenome) {
    return{
        nome: nome, 
        sobrenome: sobrenome
    };
}

const p1 = criapessoa("Eva", "Brandão");
// mesma coisa com

const p2 = {
    nome: "Ana",
    sobrenome: "Rosinho"

}// é a mesma coisa só que afunção já minimiza a quantidade de 
//codigo de forma desnecessaria, como todas as pessoas tem nome e sobrenome
// então criou-se uma função que já fornessesse essas chaves e permitir que cada um coloque 
// os seus valores para as chves

console.log(typeof p1);
// as duas são objectos só foram criads de forma diferente
console.log(typeof p2);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco +"" + resto;
        
    }
    return falaResto;
}

const olaMundo = falaFrase("ola");


function duplica(n) {
    return n*2;

}

function triplica(n) {
    return n*3;

}

function quadruplica(n) {
    return n*4;

}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));

// Outa maneira de fazer

function multiplicar(multiplicador) {
    // multiplicador
    function multiplicação(n) {
        return n * multiplicador;
        
    }

    return multiplicação;
}
const dplica = multiplicar(2);
const tplica = multiplicar(3);
const quadplica = multiplicar(4);

console.log(dplica(6));
console.log(tplica(8));
console.log(quadplica(6));

console.log("\n ............")
// Ou 
function criaMultiplicador(multiplicador) {
    return function (n){
        return n * multiplicador;

    };
}

const du = criaMultiplicador(2);
const tri = criaMultiplicador(3);
const quadru = criaMultiplicador(4);

console.log(du(2));
console.log(tri(2));
console.log(quadru(2));
