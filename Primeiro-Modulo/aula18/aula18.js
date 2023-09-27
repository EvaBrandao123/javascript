// Objectos em Javascript 

const array = [1 , 2 , 3 , 4];

array.push("Eva "); // eu posso alterar ou adicionar valores
// dentro do meu array com o tipo de dados const o que náo posso
// fazer é 

// para criar array nós usamos os parentês retos [] já o objecto nós 
// criamos com delimitadores {}

/*
const pessoa1 = {

    nome :"Eva",
    sorenome : "Brandão",
    idade : 19

};

const pessoa2 = {

    nome :"Ana",
    sorenome : "Rosinho",
    idade : 39

};

console.log(pessoa1.nome);
console.log(pessoa1.sorenome);
console.log(pessoa1.idade);

console.log("\t")

console.log(pessoa2.nome);
console.log(pessoa2.sorenome);
console.log(pessoa2.idade);

*/

                 // isso aqui é parametro 
function criaPessoa(nome, sorenome, idade){

    return{
 nome, sorenome, idade

    }
}
              // isso aqui é argumento, ou seja argumento é tudo aquilo que 
             //é passado para o parametro ou seja o valor do parametro
const pessoa1 = criaPessoa("Eva", "Brandão", 19);
const pessoa2 = criaPessoa("Ana", "Rosinho", 39);
const pessoa3 = criaPessoa("Maria", "Brandão", 15);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);

console.log("\n");

const pessoa = {

    nome : " Eva ",
    sobrenome : " Brandão ",
    idade : 18,

    fala (){ // this é o objecto ou seja serve para substituir o nome do objecto
 console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
 console.log(`A minha idade atual é : ${this.idade} `);
 
    },

    incrementaIdade(){
        ++this.idade;
    }
    
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();

// quando uma função esta detro de um ojecto ela é chamada de metodo
  

