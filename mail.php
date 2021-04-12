<?php 

$name = $_POST['name'];
$text = $_POST['text'];
$email = $_POST['email'];

$subject = 'Данные';
$my_email = "egorka33rus52@gmail.com";
$mess = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	E-mail: ' . $email . '<br>
	Текстовое сообщение: ' . $text . '';

$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/plain; charset=utf-8\r\n";
mail($my_email, $subject, $mess, $headers);

header('Location: /');
exit();
?>