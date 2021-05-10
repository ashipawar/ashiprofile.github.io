<?php
$name = $_POST ['name'];
$visitor_email = $_post['email'];
$message = $_POST['message'];

$email_from = 'ashipawar213@gmail.com';
$email_subject = "New Feebdack";
$email_body = "user Name: $name. \n".
                "user Email: $visitor_emai. \n".
                  "user Message: $message. \n";

$to = "aship6380@gmail.com";
$headers= "From: $email_from\r\n";
$headers= "Reply-To: $visitor_email\r\n";
mail($to,$mail_subject, $email_body, $headers);
header("Location: index.html");

?>



