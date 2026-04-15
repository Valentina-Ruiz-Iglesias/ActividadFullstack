// Esperamos a que cargue todo el HTML ejecutar
document.addEventListener('DOMContentLoaded', () => {
    console.log("¡Sitio cargado correctamente!");

    // Buscamos el formulario en la página
    const formContacto = document.querySelector('form');

    // Si el formulario existe (es decir, si estamos en contacto.html), le damos una acción
    if(formContacto) {
        formContacto.addEventListener('submit', (evento) => {
            evento.preventDefault(); // Evita que la página se recargue al enviar

            // Aquí mostramos una alerta sencilla al usuario
            alert("¡Gracias por escribirnos! Tu mensaje ha sido enviado exitosamente.");

            // Limpiamos los campos del formulario
            formContacto.reset(); 
        });
    }
});