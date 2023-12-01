console.log("Hola");

let nombre = "Norberto";

console.log(nombre);

//alert("Hola este es mi Javascript");

let text = document.querySelector(".h2acerca");

let condicion = "nOk";

console.log(text);

if(condicion == "Ok") {
    text.innerHTML = "OK";
} else {
    console.log("no se cumple");
}

const texto = "The Best";
function modificarAcerca(){
    text.innerHTML = `I'm ${texto}`;
}

//modificarAcerca();