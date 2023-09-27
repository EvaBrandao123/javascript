// Objecto Date 


//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + umDia);
// o mes começa em 0 e termina em 11 ou seja janeiro é 0 e dezemro é 11
//                    ano  mes  dia hora  min   seg   milesimo
const data = new Date(2023, 3, 20, 15,    14,   60 , 1000); // O Date é uma função construtora
console.log(data.toString());// mostra a hora o dia e o continente

console.log("Dia", data.getDate());
console.log("Mes", data.getMonth()); // Mes começa do zero
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Min", data.getMinutes());
console.log("Seg", data.getSeconds());
console.log("Ms", data.getMilliseconds());
console.log("Dia semana", data.getDay()); // 0 - Domingo, 6 - Sabado
console.log(Date.now());


function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}
function formataData(date) {
const dia = date.getDate();
const mes = date.getMonth() + 1;
const ano = date.getFullYear();
const hora = date.getHours();
const minuto = date.getMinutes();
const segundo = date.getSeconds();
  return `${dia}/${mes}/ ${ano}/${hora}/${minuto}/${segundo}`;

    
}

const date = new Date();
const dataAngola = formataData(date);
console.log(dataAngola);




