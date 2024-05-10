let cantidad_productos = parseInt(prompt("Ingrese la cantidad de productos que compro"));

if(cantidad_productos == 0 || isNaN(cantidad_productos)){
    window.alert("Ingrese un valor valido");
}

let contador = 0;
let total = 0;
let descuento = 0;
let total_descontado = 0;

while(contador < cantidad_productos){
    let precio_producto = parseInt(prompt("Ingrese el preocio de un producto"));
    total = total + precio_producto;
    contador = contador + 1;
}

if(cantidad_productos > 10){
    descuento = total * 0.15;
    total_descontado = total - descuento;
    document.write("Se le aplico un descuento del 15% : " + total_descontado)
}

if(total > 20000){
    descuento = total * 0.15;
    total_descontado = total - descuento;
    document.write("Se le aplico un descuento del 15% : " + total_descontado)
}


