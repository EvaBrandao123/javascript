//12. Escreva uma função que liste todas as chaves de um objeto.

function chaves() {

    const estudante = {
        nome: "Eva",
        sobrenome: "Brandão",
        idade: 19,
        curso: "Gestão de Sistemas Informaticos"
    };
    
    return Object.keys(estudante);
    
    }
    
    console.log(chaves());