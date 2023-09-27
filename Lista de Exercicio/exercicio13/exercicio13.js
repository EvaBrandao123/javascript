//13- Implemente uma função que verifique se uma chave específica existe 
//em um objeto.

function chaves() {

  const estudante = {
      nome: "Eva",
      sobrenome: "Brandão",
      idade: 19,
      curso: "Gestão de Sistemas Informaticos"
  };
  
  const chave = Object.keys(estudante);

return chave.includes("treinameto") === true ? "Existe essa chave" : "Não existe essa chave"; 
  
  }
  
 console.log(chaves());