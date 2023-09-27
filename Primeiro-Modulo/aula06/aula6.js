const nome = "Eva Linda";
const sobrenome = "Brandão";

const idade = 19;
const peso = 67;
const altura = 1.8;
let massaCorporal;
let anoNascimento ;

massaCorporal = peso/ (altura * altura);
anoNascimento = 2023 - idade;

// + para concatenar

console.log(nome +  sobrenome + ' tem '+ idade + ' anos, pesa '+ peso + ' kg');
console.log('tem ' + altura + ' de altura e seu IMC é de ' +  massaCorporal);
console.log(nome + ' nasceu em '+ anoNascimento)

 //template strings

 console.log(`${nome} ${sobrenome}  tem  ${idade}  anos, pesa  ${peso}  kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${ massaCorporal}`);
console.log(nome + 'nasceu em'+ anoNascimento)

