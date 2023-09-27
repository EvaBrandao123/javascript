// Funcoes de callack-> fucoes que são executadas quando uma accao ocorre, quado accao finaliza
// callback -> é uma função que pode ser recebida como parametro ou não
function rand(min = 1000, max = 3000){

    const num = Math.random() - (max - min) + min;

    return Math.floor(num);
}


function f1(callback) {
setTimeout(function () {
    console.log("f1");
    if(callback) callback();
}, rand());

}

function f2(callback) {
    setTimeout(function (){
        console.log("f2");
        if(callback) callback();

    }, rand());

}

function f3(callback) {
    
    setTimeout(function(){
    console.log("f3");
    if(callback) callback();
    },rand());
}

// função callback, a logica é a seguinte: o f1 sera o primeiro a ser executado
// dentro do f1 temos o f2 que sera executada só depois do f1, e dentro do f2 te-
// mos o f3 que só sera executada depois do f1 e f2, e dentro do f3 temmos o Ola mundo 
//que só sera executado depois do f1, f2, f3 

f1( function () {
    
    f2( function () {

        f3( function () {

            console.log("Ola mundo");
        });
    });
});


// outra maneira de fazer

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
    
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log("Ola mundo");
}// coisas que voce chama quando uma coisa termina de fazer