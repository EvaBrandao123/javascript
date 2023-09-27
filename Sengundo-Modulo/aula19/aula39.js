// laço infinito: é quando a minha variavel de controle nunca chega no valor da condição

const nome = "Eva";


let controle = 0;
while (controle < nome.length) {

    console.log(nome[controle]);
    controle++;

}

console.log("Segue a vida");

function random(min, max) {
    
const r = Math.random() * (max- min ) + min;

return Math.floor(r);

}

console.log("\n");

// while é usado no momento em que não sabemos quando ela vai terminar,enquanto a condição for verdadeira ela vai executar

// A diferença entre while e Do While : 
// While: ele verifica acondição e depois executa o codigo
// Do While: ele executa primeiro e depois verifica a condição

min = 1;
max = 50;
let rand = 10;

while (rand !== 10) {

    rand = random(min, max);
    console.log(rand);
    
}


console.log("\n");


do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);
