let numeroAdivinar = 0;
let formulario = document.querySelector("#formulario");
console.log(formulario)
// agregar eventos desde js
formulario.addEventListener("submit", adivinar);

function comenzarJuego(){
    numeroAdivinar = Math.floor(Math.random()*(6-1 +1) +1)
    console.log(numeroAdivinar)
}

function adivinar(e){
    e.preventDefault ();
    console.log("desde la funcion submit");
    let numeroIngresado = document.querySelector("#inputAdivinar").value;
    console.log(numeroIngresado)
    if(numeroIngresado == numeroAdivinar){
        alert("adivinaste!")
    }else if (numeroAdivinar < numeroIngresado){
        alert(`Fallaste tu numero ${numeroIngresado} es mayor que el numero magico`)
    }else{
        alert(`Fallaste tu numero ${numeroIngresado} es menor que el numero magico`)
    }
}