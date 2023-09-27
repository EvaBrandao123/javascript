// Continuação da aula 24
// o if e else dependem um do outro

const numero = 10;

if(numero >= 0 && numero <= 5){

    console.log("O número esta entre 0 e 5");

}
else{

    console.log("O número não esta entre 0 e 5");
}

 console.log("\n");


if(numero >= 0 && numero <= 5){

    console.log("O número esta entre 0 e 5");

}
else if( numero >= 6 && numero <= 8){

    console.log("O número não esta entre 6 e 8");

}else if( numero >= 9 && numero <= 11){

    console.log("O número esta entre 9 e 11");
}else{

    console.log("Não esta em nenhum intervalo");
}

