// exercicios de variaveis

let varA = "A";

let varB = "B";

let varC = "C";

const varAtemp = varA;

varA = varB;

varB= varC;

varC= varAtemp;

console.log(varA, varB, varC);

// outra maneira de resolver o exercicio sem criar variavel temporal

let vaA = "A";
let vaB = "B";
let vaC = "C";

[vaA, vaB , vaC] = [vaB, vaC , vaA];

console.log(vaA, vaB, vaC);