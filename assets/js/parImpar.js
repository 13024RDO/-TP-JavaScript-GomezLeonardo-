let numero = parseInt(prompt("Ingrese un numero"))

valor = numero % 2;

if(valor == 0){
    alert("Es un numero par")
}else if(valor > 0){
    alert("El numero es impar")
}else{
    alert("Ingrese un valor valido")
}