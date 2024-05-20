let tareas = [];
let operacion = 0;

while (operacion !== 5) {
    operacion = parseInt(prompt(
        "Lista de tareas\n"
         +
        "1- Ver lista de tareas\n" +
        "2- Agregar Tareas\n" +
        "3- Editar Tarea\n" +
        "4- Eliminar Tareas\n" +
        "5- Salir"
    ));

    switch (operacion) {
        case 1:
            VerTareas();
            break;
        case 2:
            AgregarTarea();
            break;
        case 3:
            EditarTarea();
            break;
        case 4:
            EliminarTarea();
            break;
        case 5:
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción no válida. Por favor, elija una opción entre 1 y 5.");
    }
}


function AgregarTarea() {
    let tarea = prompt("Agrega una tarea:");
    if (tarea && tarea.trim()) {
        tareas.push(tarea);
        console.log("Tarea agregada:", tarea);
    } else {
        console.log("No se agregó ninguna tarea. La entrada estaba vacía.");
    }
}

