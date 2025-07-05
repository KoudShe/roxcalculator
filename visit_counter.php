<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Função para obter o IP real do visitante
function getRealIpAddr() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        return $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        return $_SERVER['HTTP_X_FORWARDED_FOR'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED'])) {
        return $_SERVER['HTTP_X_FORWARDED'];
    } elseif (!empty($_SERVER['HTTP_FORWARDED_FOR'])) {
        return $_SERVER['HTTP_FORWARDED_FOR'];
    } elseif (!empty($_SERVER['HTTP_FORWARDED'])) {
        return $_SERVER['HTTP_FORWARDED'];
    } else {
        return $_SERVER['REMOTE_ADDR'];
    }
}

// Arquivo para armazenar os dados de visitas
$dataFile = 'visits_data.json';

// Obter IP do visitante
$visitorIp = getRealIpAddr();
$currentTime = time();
$oneDayInSeconds = 24 * 60 * 60; // 24 horas em segundos

// Ler dados existentes
$visitsData = [];
if (file_exists($dataFile)) {
    $jsonData = file_get_contents($dataFile);
    $visitsData = json_decode($jsonData, true) ?: [];
}

// Inicializar estrutura de dados se não existir
if (!isset($visitsData['ips'])) {
    $visitsData['ips'] = [];
}
if (!isset($visitsData['total_count'])) {
    $visitsData['total_count'] = 0;
}

// Verificar se o IP já visitou nas últimas 24 horas
$shouldCount = true;
if (isset($visitsData['ips'][$visitorIp])) {
    $lastVisit = $visitsData['ips'][$visitorIp];
    if (($currentTime - $lastVisit) < $oneDayInSeconds) {
        $shouldCount = false;
    }
}

// Se deve contar, registrar a visita e incrementar contador total
if ($shouldCount) {
    $visitsData['ips'][$visitorIp] = $currentTime;
    $visitsData['total_count']++;
    
    // Salvar dados atualizados
    file_put_contents($dataFile, json_encode($visitsData, JSON_PRETTY_PRINT));
}

// Retornar resposta com contador total cumulativo
echo json_encode([
    'success' => true,
    'unique_visits' => $visitsData['total_count'],
    'visitor_ip' => $visitorIp,
    'timestamp' => $currentTime,
    'new_visit' => $shouldCount
]);
?>