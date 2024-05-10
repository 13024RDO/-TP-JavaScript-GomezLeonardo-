let nota1 = parseInt(prompt("Ingrese su primera nota"));

if(isNaN(nota1)){
    alert("ERROR: No se ingreso una nota")
}

let nota2 = parseInt(prompt("Ingrese su segunda nota"));

if(isNaN(nota2)){
    alert("ERROR: No se ingreso una nota")
}

let nota3 = parseInt(prompt("Ingrese su tercer nota"));

if(isNaN(nota3)){
    alert("ERROR: No se ingreso una nota")
}

let suma = nota1 + nota2 + nota3;
let promedio = suma / 3;


promedio = parseInt(promedio);

if(promedio >= 1 && promedio <= 3 ){
    alert("Nota Insuficiente");
}else if(promedio >= 4 && promedio <= 5){
    alert("Nota Regular");
}else if(promedio >= 6 && promedio <= 7){
    alert("Nota buena");
}else if(promedio >= 8 && promedio <= 9){
    alert("Nota muy buena");
}else if(promedio == 10){
    alert("Nota Sobresaliente");
}
else{
    alert("ERROR: No se pudo determinar el promedio")
}