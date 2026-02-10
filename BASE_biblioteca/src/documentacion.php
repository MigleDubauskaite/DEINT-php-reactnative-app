<?php
// 1. Cabeceras para que la App no te dé error de CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: content-type");

// 2. Definimos la información siguiendo el esquema de clase
$ayuda = [
    [
        "seccion" => "Propósito",
        "descripcion" => "Aplicación de biblioteca digital para la consulta y descarga de libros en formato PDF y EPUB mediante una API externa.",
        "detalles" => "Permite filtrar y visualizar el catálogo en tiempo real.",
        "icono" => "BookOpen"
    ],
    [
        "seccion" => "Organización",
        "descripcion" => "Arquitectura basada en componentes funcionales de React Native y navegación mediante Stack Navigator.",
        "detalles" => "Separación lógica en páginas (Home, Libros, Ayuda) y componentes compartidos (MenuAbajo).",
        "icono" => "Layout"
    ],
    [
        "seccion" => "Pantallas",
        "descripcion" => "Home (Bienvenida), Libros (Catálogo con descarga) y Ayuda (Documentación dinámica).",
        "detalles" => "Navegación persistente en la parte inferior mediante un menú de iconos nativos.",
        "icono" => "Smartphone"
    ],
    [
        "seccion" => "Estados y Mensajes",
        "descripcion" => "Gestión de estados de carga (Loading), errores de red y confirmación de descargas.",
        "detalles" => "Uso de ActivityIndicator para feedback visual y alertas de sistema para errores.",
        "icono" => "AlertCircle"
    ]
];

// 3. Lógica para decidir si mostramos HTML o enviamos JSON
if (isset($_GET['format']) && $_GET['format'] === 'json') {
    header("Content-Type: application/json; charset=UTF-8");
    echo json_encode($ayuda);
} else {
    // Versión HTML (Para ver en el navegador)
    echo "<html><head><title>Documentación del Proyecto</title></head><body style='font-family: sans-serif; padding: 40px;'>";
    echo "<h1 style='color: #3D45AA'>Documentación Técnica: Librosaurios</h1>";
    foreach ($ayuda as $item) {
        echo "<div style='margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px;'>";
        echo "<h2>{$item['seccion']}</h2>";
        echo "<p><strong>Descripción:</strong> {$item['descripcion']}</p>";
        echo "<p><em>{$item['detalles']}</em></p>";
        echo "</div>";
    }
    echo "</body></html>";
}
?>