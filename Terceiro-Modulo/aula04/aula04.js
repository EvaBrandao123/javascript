// Escopo

const nome = "Eva"; // variavel de escopo gloal

function falaNome() {
    const nome = "Brandão"; // variavel de escopo 
    console.log(nome);
}

falaNome();


function usaFalaome() {
    falaNome();
}
usaFalaome();