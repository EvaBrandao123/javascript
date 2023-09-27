// Closures-> relacioado a escopo legs
// é a habilidade 
// Porque a fucao aonima tem 3 escopos, porque ela pode ser 
// acessada 1-dentro dela, 2-na funcao mae e no 3-escopo global


function retoraFuncao() {
    const nome = "Eva";

    return function () {
        return nome;
    };
}

const fucao = retoraFuncao();

console.dir(fucao);// anonymous-> funçao anonima


function Funcao(nome) {

    return function () {
        return nome;
    };
}
// quando a gente declara a funcao 

const funcao = Funcao("eva");
const funcao1 = Funcao("Abiel");

console.dir(funcao);
console.dir(funcao1);

console.log(funcao(), funcao1());



