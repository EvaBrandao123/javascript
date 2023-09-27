 // Continuação

 try{
     // Executa quando não há erros
     console.log(a);
    console.log("Abri um arquivo");
    console.log("Manipulei o arquivo e gerou erro");
    console.log("Fexei arquivo");

   try {

      console.log(b);

   } catch (e) {
      console.log("Deu erro");
   } finally{

      console.log("Tambem sou finally");
   }


 } catch(e){
// É executada quando há erros
console.log("Tratar o erro");

 }finally{
    //Sempre
    console.log("Finally: Eu sempre sou executado");
    // com erro ou sem erro ele é sempre executado -> Finally
 }


 function mostraHora(data) {
   
if (data  && !(data instanceof Date)) {
   throw TypeError("Esperando instancia de Date");
}

if (!data) {
   data = new Date();

}

return data.toLocaleTimeString("Pt-PT" , {
 hour: "2-digit",
 minute: "2-digit",
 second: "2-digit",
 hour12: false
 
});

 }

 try {
   const data = new Date("01-01-1970 12:58.12");
const hora = mostraHora();
 console.log(hora);


 } catch (e) {
   // tratar erro
   // console.log(e);
 }finally{
   console.log("Tenha um bom dia");
 }
