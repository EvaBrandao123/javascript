// Concatenando array 

const array1 = [1,7,9,4];
const array2 = [5,6,2];
const array3 = array1.concat(array2, [11,3,1], "Eva");
// metodo concat permite concatenar arraay 
//... rest -> pega o resto dos parametros, funciona tambem na desestruturação
//... spred -> espalha um determido conjunto de valor, nesse caso espalha o array
// isso funciona no array como no objecto, tudo que funciona em array funciona em obj
const a3 = [...array1,...array2,"Maria",...array3, "Dadiva"];

console.log(a3);