
function agregarFila(nombre, generacionActual, generacionTotal, potencia) {
    const table = document.getElementById("generacionesTabla").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerHTML = nombre;
    cell2.innerHTML = generacionActual;
    cell3.innerHTML = generacionTotal;
    cell4.innerHTML = potencia;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Eliminar";
    deleteButton.addEventListener("click", function () {
        table.deleteRow(newRow.rowIndex);
    });

    cell5.appendChild(deleteButton);
}


function agregarGeneracion(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const generacionActual = document.getElementById("generacionActual").value;
    const generacionTotal = document.getElementById("generacionTotal").value;
    const potencia = document.getElementById("potencia").value;

    agregarFila(nombre, generacionActual, generacionTotal, potencia);

    
    document.getElementById("nombre").value = "";
    document.getElementById("generacionActual").value = "";
    document.getElementById("generacionTotal").value = "";
    document.getElementById("potencia").value = "";
}

  