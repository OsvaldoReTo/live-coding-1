// Escribe tu código aquí.
const lista = document.getElementById("lista");
const btnLista = document.getElementById("btn");
let input = document.getElementById("Input1");

myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio']


btnLista.addEventListener("click", function(e){
    e.preventDefault();
    let Arr2 = bigWords(input.value, myArray);
    imprimir(Arr2);
})

function bigWords(palabra, arr) {
        let output =[];
        arr.forEach(element => {
            if(element.length>palabra.length){
                output.push(element);
            }
        }); 
    return output
}

function imprimir(arreglo) {
        arreglo.forEach(elemento => {
            lista.innerHTML += `<li>${elemento}</li>`
        });
}