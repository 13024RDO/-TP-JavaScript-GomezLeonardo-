let edad = parseInt(prompt("Ingrese su Edad"));

if (edad >= 0 && edad <= 12){
    alert("Usted es un niño de 0 a 12 años")
}else if(edad >= 13 && edad <= 19){
    alert("Usted es un adolecente de 13 a 19 años")
}else if(edad >= 20 && edad <= 59){
    alert("Usted es un adulto de 20 a 59 años")
}else if(edad >= 60){
    alert("Usted es un adulto mayor de 60 años")
}else{
    alert("Por favor ingrese un valor valido")
}