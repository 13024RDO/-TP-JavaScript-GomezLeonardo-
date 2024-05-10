let nota1 = parseInt(prompt("Ingrese su primera nota"));
let nota2 = parseInt(prompt("Ingrese su segunda nota"));
let nota3 = parseInt(prompt("Ingrese su tercer nota"));

if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
    alert("ERROR: No se ingresó una nota válida");
} else if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    alert("ERROR: Una o más notas están fuera del rango válido (0-10)");
} else {
    let suma = nota1 + nota2 + nota3;
    let promedio = suma / 3;
    
    promedio = parseInt(promedio);
    
    switch (true) {
        case (promedio >= 1 && promedio <= 3):
            alert("Nota Insuficiente");
            break;
        case (promedio >= 4 && promedio <= 5):
            alert("Nota Regular");
            break;
        case (promedio >= 6 && promedio <= 7):
            alert("Nota Buena");
            break;
        case (promedio >= 8 && promedio <= 9):
            alert("Nota Muy Buena");
            break;
        case (promedio === 10):
            alert("Nota Sobresaliente");
            break;
        default:
            alert("ERROR: No se pudo determinar el promedio");
    }
}
