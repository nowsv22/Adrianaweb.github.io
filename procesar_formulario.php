<?php
// Conexión a la base de datos (reemplaza con tus propias credenciales)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "form-base-de-datos";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir datos del formulario
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$asunto = $_POST['asunto'];
$comentario = $_POST['comentario'];

// Preparar la consulta SQL para insertar datos
$sql = "INSERT INTO formulario_contacto (nombre, correo, asunto, comentario) 
        VALUES ('$nombre', '$correo', '$asunto', '$comentario')";

if ($conn->query($sql) === TRUE) {
    echo "Formulario enviado correctamente";
} else {
    echo "Error al enviar el formulario: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
