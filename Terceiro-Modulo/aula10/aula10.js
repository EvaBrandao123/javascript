// Funções construtoras -> ela já cria o objecto e retorna objecto,
// a gente precisa sempre iniciar, é molde para gerar novos objectos
// construtora-> criasse com a palavra maiuscula, sempre que eu quizer 
//usar uma função construtora tenho que chamar o new
//palavra New-> Cria um novo objecto vazio, faz o this apontar para o 
// objecto que  esta sendo utilizado, não precisa usar o return pois ela já faz iss




function Pessoa(nome, sobrenome) {
// variavel privada
    const ID = 123456;

// metodo interno privado
    const metodoInterno = function(){


    };

 // atributos publicos atraves do this permite ser
 // publica, acessada em qualquer lugar
this.nome = nome,
// memsa coisa em dizer Pessoa.nome 
this.sobrenome = sobrenome;

//metodo publico por causa do this
this.metodo = function(){
    console.log(this.nome + ": sou um metodo");
};


}


const p1 = new Pessoa("Eva", "Brandão");
const p2 = new Pessoa("Ana", "Rosinho");
 console.log(p1, p2);
 console.log();
 p1.metodo();













