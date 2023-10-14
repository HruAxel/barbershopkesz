<?php

header("Content-Type: application/json");

$adatok = json_decode(file_get_contents("php://input"));

$errors = [];

if (strlen($adatok->name) === 0) {
    $errors[] = 'Írj be egy nevet!';
}
if (filter_var($adatok->email, FILTER_VALIDATE_EMAIL) === false) {
    $errors[] = 'Az e-mail cím helytelen!';
}

if (strlen($adatok->barber) === 0) {
    $errors[] = 'Válassz egy fodrászt!';
}

if (!$adatok->time) {
    $errors[] = 'Írj be egy dátumot!';
}
if (strlen($adatok->services) === 0) {
    $errors[] = 'Válassz egy szolgáltatást!';
}



if (count($errors) > 0) {
    print json_encode(['status' => 'error', 'errors' => $errors]);
} else {
    print json_encode(['status' => 'success', 'message' => 'Kedves ' . $adatok->name . '! <br><br> Sikeresen bejelentkeztél, ' . $adatok->services . ' szolgáltatásunkra! <br><br> Az ön fodrásza: ' . $adatok->barber . '! <br> Várjuk szeretettel az alábbi időpontban: ' . $adatok->time . ' üzletünkben. <br><br> A megerősítő e-mailt elküldtük!']);
}
