// Fazendo Calculadora com função Contrutora

function Calculadora() {
    
    this.display = document.querySelector(".display");

  this.inicia = () => {
  this.capturaCliques();
  this.capturaEnter();

    };

    this.capturaEnter = ()=>{

        document.addEventListener("keyup", e => {
            if(e.keyCode !== 13 ) return;
            this.realizaConta();

        });

    this.capturaCliques= () => {

  document.addEventListener("click",event =>{

    const el = event.target;

    if (el.classList.contains("btn-num")) this.adicionaNumeroDisplay(el);
    
    if (el.classList.contains("btn-clear")) this.clear(el);
    
    if (el.classList.contains("btn-del")) this.delete(el);
    
    if (el.classList.contains("btn-eq")) this.realizaConta(el);
});
    };

    this.realizaConta = () =>{
try {
    const conta = eval(this.display.value);
    if (!conta) {
        alert("Conta inválida");
        return;
  
    }

    this.display.value = conta;
} catch (e) {
    alert("Conta invalida");
    return;

}
    };

    // Adicionar numero
    this.adicionaNumeroDisplay = el => this.display.value += el.innerText;

    // Eliminar
    this.clear = () => this.display.value= "";

    // eliminar alguns
    this.delete = () => this.display.value = this.display.value.slice(0, -1);
    
  }
}

const calculadora = new Calculadora();
calculadora.inicia();