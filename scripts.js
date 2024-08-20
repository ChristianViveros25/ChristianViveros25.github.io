// Se adiciona un "event listener" para cuando se cargue todo el contenido de la página
document.addEventListener("DOMContentLoaded", () => {

    // Se obtiene referencia a la lista dinámica:
    const taskList = document.getElementById("taskList");

    // Referencia al elemento seleccionado de la lista 
    let selectedTask = null;

    // Event listener para el botón "Agregar Tarea"
    document.getElementById("addTask").addEventListener("click", () => {
        const textoTarea = prompt("Ingrese el nombre de la tarea:");
        if (textoTarea) {
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = textoTarea;
            nuevaTarea.addEventListener("click", () => selectedTaskHandler(nuevaTarea));
            taskList.appendChild(nuevaTarea);
        } 
    });

    // Event listener para el botón "Borrar Tarea"
    document.getElementById("deleteTask").addEventListener("click", () => {
        if (selectedTask) {
            taskList.removeChild(selectedTask);
            selectedTask = null;
        } else {
            alert("No ha seleccionado ninguna tarea para eliminar");
        }
    });

    // Event listener para el botón "Editar Tarea"
    document.getElementById("editarTask").addEventListener("click", () => {
        if (selectedTask) {
            const nuevoTexto = prompt("Modificar la tarea", selectedTask.textContent);
            if (nuevoTexto) {
                selectedTask.textContent = nuevoTexto;
            }
        } else {
            alert("Seleccione una tarea para modificar");
        }
    });

    // Función para manejar la selección de una tarea
    function selectedTaskHandler(task) {
        if (selectedTask) {
            selectedTask.style.backgroundColor = ""; // Desmarcar la tarea anterior
        }
        selectedTask = task;
        selectedTask.style.backgroundColor = "#ff6600"; // Marcar la tarea seleccionada
    }
});
