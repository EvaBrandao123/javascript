/* If e Else

entre 0 - 11 - Bom dia
entre 12 - 17 - Boa tarde
entre 18 -23 - Boa noite


If pode ser usado sozinho
Sempre que utilizo a palavra else, preciso de um if antes
Eu posso ter quantos else ifs no sistema.
Eu só posso ter um else no final  
Podemos usar apenas o if e o else sem a necessidade do else if.
*/

const hora = 17;

if( hora >= 0  && hora <= 11){

    console.log("Bom dia");
}
else if(hora >= 12 && hora <= 17 ){

    console.log("Boa Tarde");
}
else if( hora >= 18 && hora <= 23){

    console.log("Boa Noite");
} else{

    console.log("Desejamos um Otimo dia");
}


const tenhoGrana = null;

if(tenhoGrana){

   console.log("Vou sair de casa");

} else{
    console.log("Não vou sair de casa");
}

