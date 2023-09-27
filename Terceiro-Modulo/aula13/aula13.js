// Funções Geradoras-> pausar o codigo em determinado local
// o metodo next()-> permite ver o valor de uma função geradora
// console.log(g1.next()); aqui ele mostra o valor e se ainda tem mais na funça~geradora
// // console.log(g1.next().value); apresenta apenas o valor 

function* geradora1(){
    // Codigo qualquer..
    yield "valor 1";

 // Codigo qualquer..
       yield "valor 2";

    // Codigo qualquer..
    yield "valor 3";


}
const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());

console.log("\n......................");
for(let valor of g1){ 
 // mais uma vez, funcoes com of permite ver o valor só para não esquecer
    console.log(valor);
}

console.log("\n......................");

// gerador infinito

function* gerador2(){
let i = 0;

while(true){

    yield i;
    i++;
}
}

const g2 = gerador2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log("\n......................");

// gerador que delega para outra geradora
function* gerador3(){

    yield 0;
    yield 1;
    yield 2;

}

console.log("\n......................");

function* geradora4(){
    // com a gerador3 significa que vai gerar tudo que esta na geradora 3
    // e continuar a gerar o que está na geradora4
yield* gerador3(); // Do jeito que está permite continuar a gerar 
// ate o terminar
yield 3;
yield 4;
yield 5;

}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

console.log("\n......................");


function* gerador5(){

    yield function(){
        console.log("vim do y1");
    }

    return function(){
        console.log("Vim do return");
    }

    yield function(){
        console.log("vim do y2");
    }

}

const g5 = gerador5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
func1();
func2();
func3();


// a diferença do return e do yield: o return vai executar o 
// o que está na função e não da sequência, já o yield ele permite 
//dar sequencia se por ventura encontar
// Para o exemplo lá de cima nos permite ver que depois do return ele já 
// não permite executar o que yield que está por baixo dela




