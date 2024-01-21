const API_URL = 'https://jsonplaceholder.typicode.com';

function obtenerComentarios() {
    fetch(`${API_URL}/comments`)
        .then(response => response.json())
        .then(comments => {
            const comentariosSection = document.getElementById("comentarios");
            const commentTemplate = document.getElementById("comment-template");

            comments.forEach(comment => {
                const newComment = commentTemplate.cloneNode(true);
                newComment.style.display = "block";
                newComment.querySelector("h3").textContent = comment.name;
                newComment.querySelector("p").textContent = comment.body;
                comentariosSection.appendChild(newComment);
            });
        })
        .catch(error => console.error("Error al obtener comentarios:", error));
}

window.onload = () => {
    obtenerComentarios();

    // la lógica para manejar el envío de comentarios desde el formulario
    const formulario = document.getElementById("formularioComentario");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
    });
};