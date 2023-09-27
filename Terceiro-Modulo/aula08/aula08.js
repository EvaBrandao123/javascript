// funções fabrica(favctory function )-> são funçoes que 
//retornam objectos


//Ex de factory function:
function criaPessoa(nome, sobrenome, p, a) {
    return{
        nome, 
        sobrenome,
       // Getter
       get nomeCompleto(){
            return` ${this.nome} ${this.sobrenome} ` ;
        },

        set nomeCompleto(valor){

          valor = valor.split(" ");
          this.nome = valor.shift();
          this.sobrenome = valor.join(" ");
          console.log(valor);

        },

        // Metodod: são todas as funções que se 
        //encontram dentro de um objecto
        fala: function (assunto) {
            return `${nome} está ${assunto} ${this.peso}.`;
        }, 
        peso:p,
        altura: a,
        
// getter-> so queremos obter o valor, a palavra get permite ao meu metodo
// se comportar como um atributo, o que é um atributo, atributo são as carateristica
// de um objecto

       get IMC (){
         const indice = this.peso /(this.altura ** 2);
         return indice.toFixed(2); //tofixed para ter so duas casas decimais
        }
    };
}

// sepre que nos usarmos o objecto ponto algum metodo(ex: p1.fala("falando sobre Js")) desse 
//obejto o this vai se referir ao obejecto que esta chamando ele que no caso é o p1


const p1 = criaPessoa("Eva", "Brandão", 56, 1.67);
p1.nomeCompleto = "Eva linda Rosinho Brandão";
console.log(p1.nomeCompleto);
console.log(p1.fala("Tudo bem contigo?"));
const p2 = criaPessoa("Maria", "Brandão", 26, 1.34);
const p3 = criaPessoa("Ana", "Rosinho", 36, 1.54);
console.log(p1.IMC);
console.log(p2.IMC);
console.log(p3.IMC);


/*
const p2 = criaPessoa("Maria", "brandao", 65, 1.80);
console.log(p2.IMC);


//construtor function (funçao construtora)
*/