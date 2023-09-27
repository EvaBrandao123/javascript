// Mais digerença entre var let 

// Let tem escopo de bloco, ou seja tudo que esta dentro de delimitador{... bloco}
// Mas var so tem escopo de função 
const verdadeira = true;

let nome = "Dadiva"; // criando
var nome2 = "Lupita";

var nome2 = "Bernice";// é possivel no mesmo escopo redeclarar a variavel

console.log(nome, nome2);

if (verdadeira) {

    let nome = "Eva"; /* aqui tambem estamos criando dentro de delimitadoes 
    com o mesmo nome mais não é a mesma variavel
    */
   var nome2 = "Isabel"; //redeclarando
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = "DDD";
        var nome2 = "Lalalal";//redeclarando
        console.log(nome, nome2);
    }
}

console.log(nome, nome2);

function falaOI() {
    
    console.log("Oi");
}

falaOI();


console.log(sobrenome);

var sobrenome = "Miranda";
