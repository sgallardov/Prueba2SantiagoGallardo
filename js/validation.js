$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();
        var isValid = true;

        // Check if all fields are filled
        var rut = $("input[placeholder='RUT']").val();
        var nombre = $("input[placeholder='Nombre']").val();
        var apellidoPaterno = $("input[placeholder='Apellido Paterno']").val();
        var apellidoMaterno = $("input[placeholder='Apellido Materno']").val();
        var edad = $("input[placeholder='Edad']").val();
        var email = $("input[placeholder='Correo Electrónico']").val();
        var telefono = $("input[placeholder='Fono de Contacto']").val();

        if (!rut || !nombre || !apellidoPaterno || !apellidoMaterno || !edad || !email || !telefono) {
            alert("Todos los campos son obligatorios.");
            isValid = false;
        }

        // RUT: largo entre 9 y 10 caracteres
        if (rut.length < 9 || rut.length > 10) {
            alert("El RUT debe tener entre 9 y 10 caracteres.");
            isValid = false;
        }

        // Nombre: largo entre 3 y hasta 20 caracteres
        if (nombre.length < 3 || nombre.length > 20) {
            alert("El nombre debe tener entre 3 y 20 caracteres.");
            isValid = false;
        }

        // Apellido Paterno: largo entre 3 y hasta 30 caracteres
        if (apellidoPaterno.length < 3 || apellidoPaterno.length > 30) {
            alert("El apellido paterno debe tener entre 3 y 30 caracteres.");
            isValid = false;
        }

        // Apellido Materno: largo entre 3 y hasta 30 caracteres
        if (apellidoMaterno.length < 3 || apellidoMaterno.length > 30) {
            alert("El apellido materno debe tener entre 3 y 30 caracteres.");
            isValid = false;
        }

        // Edad: entre 18 y 35 años
        if (edad < 18 || edad > 35) {
            alert("La edad debe estar entre 18 y 35 años.");
            isValid = false;
        }

        // Correo electrónico: validación de estructura y dominio
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("El correo electrónico no es válido.");
            isValid = false;
        }

        // Número telefónico: 9 dígitos, empezando con '9'
        var telefonoRegex = /^9\d{8}$/;
        if (!telefonoRegex.test(telefono)) {
            alert("El número telefónico debe tener 9 dígitos y comenzar con '9'.");
            isValid = false;
        }

        if (isValid) {
            $("#RUTResult").text(rut);
            $("#nombreResult").text(nombre);
            $("#apellidoPaternoResult").text(apellidoPaterno);
            $("#apellidoMaternoResult").text(apellidoMaterno);
            $("#edadResult").text(edad);
            $("#emailResult").text(email);
            $("#telefonoResult").text(telefono);

            var successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();

            $("form")[0].reset();
        }
    });
});