document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'none';
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Éxito</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Tu mensaje se envió con éxito.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = form.querySelector('input[placeholder="Nombre Completo"]').value.trim();
        const email = form.querySelector('input[placeholder="Correo Electronico"]').value.trim();
        const telefono = form.querySelector('input[placeholder="Número Telefónico"]').value.trim();
        const asunto = form.querySelector('input[placeholder="Asunto"]').value.trim();
        const mensaje = form.querySelector('textarea[placeholder="Mensaje"]').value.trim();

        if (!nombre || !email || !telefono || !asunto || !mensaje) {
            alert('Por favor, rellene todos los campos.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        if (!validateTelefono(telefono)) {
            alert('Por favor, ingrese un número telefónico válido (9 dígitos y comienza con "9").');
            return;
        }

        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();

        form.reset();  // Limpiar los campos del formulario
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateTelefono(telefono) {
        const telefonoRegex = /^9\d{8}$/;
        return telefonoRegex.test(telefono);
    }
});
