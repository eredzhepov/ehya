<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$login = $_POST['login'];
$pass = $_POST['pass'];

// Формирование самого письма


if ($login and $pass) {
  $title = "Новый сообщение от Ehya";
  $body = "
    <h2>Авторизация</h2>
<b>Логин:</b> $login<br>
<b>Пароль:</b> $pass<br><br>
  ";
} elseif ($email) {
  $title = "Новый подписчик на сайте Ehya";
$body = "
<h2>Новое сообщение</h2>
<b>Новая подписка</b> $email<br>
";
}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'en.eredzhep@mail.ru'; // Логин на почте
    $mail->Password   = '79780253621Enver'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('en.eredzhep@mail.ru', 'En Eredzhep'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('eredzhepov.enver@yandex.ua');  
   

    
  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');