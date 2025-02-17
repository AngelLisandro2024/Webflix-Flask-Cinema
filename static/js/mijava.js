$(document).ready(function() {
    $('#confirmDeleteModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Botón que activó el modal
        //var id = button.data('id'); // Extrae el ID del empleado
        var ruta = button.data('ruta');
        var actionUrl = ruta; // Construye la URL de eliminación
        console.log(actionUrl);

        // Actualiza la acción del formulario en el modal
        $('#deleteForm').attr('action', actionUrl);
    });
});