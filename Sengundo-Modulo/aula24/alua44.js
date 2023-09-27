// Tratando e lançando erros(try, catch,throw)
// throw new Error-> são funções construtoras 
// throw new ReferenceError-> são funções construtoras 
//throw new TypeError-> são funções construtoras para saer o tipo de erro

try{
    // Try=> tentar
    console.log(Naoexiste); //tente executar esse trecho de codigo

} catch(err){

    console.log("Naoexiste");
}


function soma (x, y) {

if (typeof x !== "number" || typeof y !== "number"){
    // throw é para lançar o erro ou seja apresentar o erro
 throw new Error("x e y precisam ser numero");


}

return x + y;
}
// o try e catch é para capturar ou seja tratar o erro
try{

    console.log(soma(23,67));
    console.log(soma("ola",67));

} catch(error ){

    console.log(error)
}
