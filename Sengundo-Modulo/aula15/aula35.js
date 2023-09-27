// Exercicicio

const elementos = [
    {tag: "p", texto: "Frase 1"}, // 0
    {tag: "div", texto: "Frase 2"}, // 1
    {tag: "footer", texto: "Frase 3"}, // 2
    {tag: "section", texto: "Frase 4"} // 3

];

const container = document.querySelector(".container");
const div = document.createElement("div"); // criar um elemento

for (let i = 0; i < elementos.length; i++) {
const {tag, texto} = elementos[i];
let tagCriada = document.createElement(tag);
//tagCriada.innerText = texto;
let textoCriado = document.createTextNode(texto);// TextNode nada mais é do que o texto de um elemento é um filho também de um elemento


tagCriada.appendChild(textoCriado);//appendChild significa adiciona um filho nessa tag 
 div.appendChild(tagCriada);

}

// Doom conjuntos de objectos que interferem na interface da pagina
// elementos que me permitem manipular a pagina do HTML e a arvore tem a ver com a sequência que enem a arvore geneologica

container.appendChild(div);
