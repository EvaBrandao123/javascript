function criaCalculadora() {

    return {


display: document.querySelector(".display"),
btnClear: document.querySelector(".btn-clear"),

 inicia() {


    this.cliqueBotoes();
    this.pressionaEnter();
 },

 // limpar tudo
 clearDisplay(){

    this.display.value = "";
    
},

pressionaEnter(){

this.display.addEventListener("keyup", e =>{

if(e.keyCode === 13){
    this.realizaConta();
}

})

},

apagaUm(){

this.display.value = this.display.value.slice(0, -1);

},

realizaConta(){

let conta = this.display.value;

try {
    conta = eval(conta);
    if(!conta){

        alert("Conta invalida");
        return;
    }

    this.display.value = String(conta);
} catch (e) {
    alert("Conta invalida");
   return;
};


},

// clicar e apresentar o que foi selecionado
cliqueBotoes(){
// this-> calculadora
    document.addEventListener("click", function(e){
const el = e.target;


if(el.classList.contains("btn-num")){
 // contains significa conter ou contem, então aí está mais 
 //ou menos a dizer que o el ,ou seja, se o lugar que eu clicar 
 //conter uma class btn-num
 
 this.btnParaDisplay(el.innerText);

}

if(el.classList.contains("btn-clear")){
    this.clearDisplay();
}

if(el.classList.contains("btn-del")){
this.apagaUm();
}

if(el.classList.contains("btn-eq")){

    this.realizaConta();
}

    }.bind(this)); // estou mais ou menos a dizer o this que eu quero que voce entenda é a da calculadora e não do document 

},

btnParaDisplay(valor){

this.display.value += valor;

}

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();