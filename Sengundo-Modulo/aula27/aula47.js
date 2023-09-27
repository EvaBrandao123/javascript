// Exercicio
//

function relogio(){


    function criaHoraSegundos(segundos ) {
        const data = new Date(segundos * 1000);
    
        return data.toLocaleTimeString("pt-PT", {
    
            hour12: false,
            timeZone: "UTC"
        });
        
    }
    
    
    const relogio = document.querySelector(".relogio");
    const iniciar = document.querySelector(".iniciar");
    const pausar = document.querySelector(".pausar");
    const zerar = document.querySelector(".zerar");
    let segundos = 0;
    let timer ;
    
    function iniciaRelogio() {
         timer = setInterval(function () {
          segundos++;
          relogio.innerHTML = criaHoraSegundos(segundos);  
    
        }, 1000);
    
    }
    
    document.addEventListener("click", function(e){
    const el = e.target;
    console.log(el);
    
    if (el.classList.contains("zerar")) {
        clearInterval(timer);
    
        relogio.innerHTML = "00:00:00";
        segundos = 0;
        relogio.classList.remove("pausado");
    }
    
    if (el.classList.contains("pausar")) {
        clearInterval(timer);
        relogio.classList.add("pausado"); 
    }
    
    
    if (el.classList.contains("iniciar")) {
        
        relogio.classList.remove("pausado");
        clearInterval(timer);
        iniciaRelogio();
    
    }
    
       
    })



}

relogio();


/*
iniciar.addEventListener("click", function (Event) {

   relogio.classList.remove("pausado");
    clearInterval(timer);
    iniciaRelogio();

});


pausar.addEventListener("click", function (Event) {

   clearInterval(timer);
   relogio.classList.add("pausado"); 
// classList permite criar uma class no css e chamar aqui no javascript

});
 

zerar.addEventListener("click", function () {
    clearInterval(timer);

    relogio.innerHTML = "00:00:00";

    segundos = 0;
 
});
   */