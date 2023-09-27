// 16-Crie uma função que receba um array de estudantes e retorne o 
//estudante mais velho.

function maisvelho() {
    
    const estudantes = [
    
        {nome: "Eva", sobrenome: "Brandão", idade: 19, curso: "Desenhador"},
        {nome: "Ana", sobrenome: "Venerosa", idade: 39, curso: "Enfermagem"},
        {nome: "Maria", sobrenome: "Brandão", idade: 16, curso: "Fisioterapia"},
        {nome: "Margareth", sobrenome: "Rosario", idade: 56, curso: "Economia"},
        {nome: "Eva", sobrenome: "Santos", idade: 78, curso: "Mecanica"},
        {nome: "Rosa", sobrenome: "Diorath", idade: 19, curso: "ELectronica"}
        
        ];

        let maisVelho = 0;

        for(let i = 0; i < estudantes.length; i++){
         let idades = estudantes[i].idade;
         
         if(idades > maisVelho)
           maisVelho = idades;

        }

        return maisVelho;
}
console.log(maisvelho());