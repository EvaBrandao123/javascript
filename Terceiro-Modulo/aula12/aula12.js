// Função recursiva-> são funções que executam o codigo 
//delas e se chamam de volta, ou seja, ela volta a executar o 
//codigo até que ela seja false.

//função recursiva tem um limite, ele para de executar se notar que a recursividade está muito alta


function recursiva(max){

if(max >= 500 ) return;

max++;

console.log(max);

recursiva(max); // é uma função recursiva pois ela se chamou de volta
}
recursiva(1);