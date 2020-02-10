<?php



$name = $_POST['name'];
$subject = $_POST['subject'];
$mailFrom = $_POST['email'];
$message = $_POST['message'];


$mailTo = "knchoudhary11@gmail.com";
$headers = "From: ".$mailFrom;
$text = "You have received an e-mail from " .$name.". \n\n" .$message;

mail($mailTo, $subject, $text, $headers);

header("Location: index.html?mailsend"); 



?>