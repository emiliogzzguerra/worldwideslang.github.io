<?php

define('DB_NAME','Info');
define('DB_USER','Emiliogzzguerra');
define('DB_PASSWORD','Emilio1212');
define('DB_HOST','localhost');

$link = mysql_connect(DB_HOST,DB_USER, DB_PASSWORD);

if (!$link) {
	die('Could not connect: ' . mysql_error());
}

$db_selected = mysql_select_db(DB_NAME, $link);

if(!$db_selected){
	die('Can\'t use ' . DB_NAME . ' : ' . mysql_error());
}

header( 'Location: http://www.worldwideslang.com/Monolingual/thankYou.html');

$name = $_POST['Name'];
$nationality = $_POST['Nationality'];
$language = $_POST['Language'];
$contribution = $_POST['Contribution'];
$email = $_POST['Email'];

$sql = "INSERT INTO  Info (Name,Nationality,Language,Contribution,Email) VALUES ('$name','$nationality','$language','$contribution','$email')";

if(!mysql_query($sql)) {
	die('Error: ' . mysql_error());	
}


$to = $email;
$subject = 'Welcome to the World Wide Slang!';
$message = 'Hi there ' . $name . ', great to have you on board! You have just joined hundreds of people who want to level up their language skills.' . "\r\n\r\n" . 'It looks like you' . "'" . 're going to be helping us correcting ' . $contribution . ' sentences in ' . $language . ', as soon as we have something for you we' . "'" . 'll send it to you right away!' . "\r\n\r\n" . 'The waiting time depends on how many people are helping with sentences in your language, please be patient :)';

$headers = 'From: worldwideslang.contact@gmail.com' . "\r\n";
$headers .= 'Bcc: worldwideslang.contact@gmail.com' . "\r\n";

mail ($to,$subject,$message,$headers);

mysql_close();
?>