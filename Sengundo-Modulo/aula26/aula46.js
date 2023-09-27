// SetInternal e SetTime

function mostrarHora(params) {
    let data = new Date();

    return `Dia ${data.toLocaleDateString("pt-PT")} as ${data.toLocaleTimeString("pt-PT")}`; //para mostrar o dia / mes e ano

    
}

function funcaoDoInterval() {
    console.log(mostrarHora());
}
setInterval(funcaoDoInterval, 1000);// chamar a funcao nada mais é do que colocar o nome da funcao sem os parenteses, se colocar 
//os parentes entao estamos a executar a função, ou seja, tudo que estiver dentro daquela funcão sera execuatada.

// outra meniera de fazer com a função dentro do setInternal

setInterval(function () {
    console.log(mostrarHora());
}, 1000);

// outra meniera de fazer com variavel, aqui eu ão cosigo sar eventos

const timer = setInterval(function () {
    console.log(mostrarHora());
}, 1000);

// Ela executa so uma vez 
setTimeout(function () {
 clearInterval(timer);
}, 10000);// ela vai parar depois de 10s

setTimeout(function () {
    console.log("ola mundo");

}, 5000);


