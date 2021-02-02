<?php

$name = $_POST['name']; 
$mail = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$mess = 'Отправитель: '. $name. "\r\n". 'E-mail:'. $mail. "\r\n". 'Телефон: '. $phone. "\r\n". 'Сообщение: '. $message;

$email = 'imap.beget.com';
$headers = "From: $email\r\nReply-To: $email" . "\r\n" . "MIME-Version: 1.0\r\nContent-type: text/plain; charset=utf-8";

mail('mr.snufik@mail.ru', 'subject', $mess, $headers);

header('Location: http://kkkmt.web-mo.ru/Nikiforov');

?>