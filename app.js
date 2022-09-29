// Escribe tu código aquí.
const lista = document.getElementById("lista")
const btnLista = document.getElementById("btn")

myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio']

btnLista.addEventListener("click", function(e){
    e.preventDefault();
    bigWords("bocina", myArray);

})

function bigWords(palabra, arr) {
        let output =[];
        arr.forEach(element => {
            if(element.length>palabra.length){
                output.push(element);
                console.log(output);
            }
        }); 
        lista.innerHTML+=`<li>${output[0]}</li><li>${output[1]}<li> ${output[2]}</li>`  
}