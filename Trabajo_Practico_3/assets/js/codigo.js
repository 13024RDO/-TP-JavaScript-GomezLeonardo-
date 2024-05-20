let tareas = [];
let operacion = 0;

while (operacion !== 5) {
    operacion = parseInt(prompt(
        "Lista de tareas\n" +
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
            alert("Saliendo del programa...");
            break;
        default:
            alert("Opción no válida. Por favor, elija una opción entre 1 y 5.");
    }
}

function VerTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas en la lista.");
    } else {
        alert(tareas)
    }
}

function AgregarTarea() {
    let tarea = prompt("Agrega una tarea:");
    if (tarea && tarea.trim().length > 0) {
        tareas.push(tarea.trim());
        alert("Tarea agregada: " + tarea.trim());
    } else {
        alert("No se agregó ninguna tarea. La entrada estaba vacía o solo contenía espacios.");
    }
}


function EditarTarea() {
    VerTareas();
    let index = parseInt(prompt("Ingrese el número de la tarea que desea editar:")) - 1;
    if (index >= 0 && index < tareas.length) {
        let nuevaTarea = prompt("Ingrese la nueva descripción de la tarea:");
        if (nuevaTarea && nuevaTarea.trim()) {
            tareas[index] = nuevaTarea;
            alert("Tarea actualizada:", nuevaTarea);
        } else {
            alert("No se actualizó la tarea. La entrada estaba vacía.");
        }
    } else {
        alert("Número de tarea no válido.");
    }
}

function EliminarTarea() {
    VerTareas();
    let index = parseInt(prompt("Ingrese el número de la tarea que desea eliminar:")) - 1;
    if (index >= 0 && index < tareas.length) {
        let tareaEliminada = tareas.splice(index, 1);
        alert("Tarea eliminada:", tareaEliminada[0]);
    } else {
        alert("Número de tarea no válido.");
    }
}
