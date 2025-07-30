<?php
header("Access-Control-Allow-Origin: https://wormate.io");
header("Content-Type: application/json");

// Dışarıdaki JSON URL'si
$json_url = "https://xseko60.github.io/wormExtension/api/clients.json?v=";

// Dış URL'den JSON verisini al
$json_data = file_get_contents($json_url);

// Gelen JSON’u direkt ekrana bas
echo $json_data;
?>
