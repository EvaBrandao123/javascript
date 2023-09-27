// 14. Crie uma função que calcule a média das idades de um array de estudantes
//(cada estudante é um objeto).


function mediaEstudante() {
    
    const estudantes = [
    
    {nome: "Eva", sobrenome: "Brandão", idade: 19, curso: "Desenhador"},
    {nome: "Ana", sobrenome: "Venerosa", idade: 39, curso: "Enfermagem"},
    {nome: "Maria", sobrenome: "Brandão", idade: 16, curso: "Fisioterapia"},
    {nome: "Margareth", sobrenome: "Rosario", idade: 56, curso: "Economia"},
    {nome: "Eva", sobrenome: "Santos", idade: 78, curso: "Mecanica"},
    {nome: "Rosa", sobrenome: "Diorath", idade: 19, curso: "ELectronica"}
    
    ];
    
    let soma = 0;
    let quantidade = 0;
    let media = 0;
    
    for(let i = 0; i < estudantes.length; i++){

      let idades = estudantes[i].idade;
       soma = soma + idades;
       quantidade++

    }

    return media = (soma) / quantidade;
    }
    
    console.log(mediaEstudante());