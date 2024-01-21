const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    const emailField = document.getElementById('correo');
    const email = emailField.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert('Por favor, introduce una dirección de correo electrónico válida.');
        emailField.focus();
    } else {
        // Aquí puedes realizar alguna acción o simplemente permitir el envío del formulario
        alert('¡El formulario se ha enviado con éxito!');
        event.target.submit();
    }
});