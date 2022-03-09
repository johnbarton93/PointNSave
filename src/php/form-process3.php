<?php

session_start();

if(!empty($_FILES['data'])){
    /*move_uploaded_file(
        $_FILES['data']['tmp_name'],
        'uploads/'.$_POST['filename'].'.pdf'
    );*/
    move_uploaded_file(
        $_FILES['data']['tmp_name'],
        $_POST['filename'].'.pdf'
    );
} else {
    echo "No Data Sent";
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');


if (!($email = $_POST["email"]?? '')) {
    return;
}


$message = $_POST["message"];
$firstname = $_POST["firstname"];


$pdfdoc = $_POST["fileDataURI"];


// $EmailTo = "desireby77@gmail.com";
$EmailTo = "desireby77@gmail.com";


$Subject = "Point'n Save. New Message";

/*$file = "mynewfile.pdf"; */

$file = $_POST['filename'].'.pdf';

// prepare email body text
$Body = "Name: " . $firstname . "\n" . "E-mail: " . $email . "\n" . "Comments: " . $message;


$r = sendMailAttachment($EmailTo, $email, $Subject, $Body, $file); // отправка письма c вложением
/*
echo ($r)?'<center><h2 class="action_title">Ваша заявка отправлена! Скоро мы ее рассмотрим и позвоним вам!<h2></center>':'Ошибка. Письмо не отправлено!';
*/

function sendMailAttachment($mailTo, $from, $subject, $message, $file = false){
    $separator = "---"; // разделитель в письме
    // Заголовки для письма
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: $from\nReply-To: $from\n"; // задаем от кого письмо
    $headers .= "Content-Type: multipart/mixed; boundary=\"$separator\""; // в заголовке указываем разделитель
    // если письмо с вложением
    if($file){
        $bodyMail = "--$separator\n"; // начало тела письма, выводим разделитель
        $bodyMail .= "Content-Type:text/html; charset=\"utf-8\"\n"; // кодировка письма
        $bodyMail .= "Content-Transfer-Encoding: 7bit\n\n"; // задаем конвертацию письма
        $bodyMail .= $message."\n"; // добавляем текст письма
        $bodyMail .= "--$separator\n";
       $fileRead = fopen($file, "r"); // открываем файл
        $contentFile = fread($fileRead, filesize($file)); // считываем его до конца
        fclose($fileRead); // закрываем файл
        $bodyMail .= "Content-Type: application/octet-stream; name==?utf-8?B?".base64_encode(basename($file))."?=\n"; 
        $bodyMail .= "Content-Transfer-Encoding: base64\n"; // кодировка файла
        $bodyMail .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode(basename($file))."?=\n\n";
        $bodyMail .= chunk_split(base64_encode($contentFile))."\n"; // кодируем и прикрепляем файл
        $bodyMail .= "--".$separator ."--\n";
    // письмо без вложения
    }else{
        $bodyMail = $message;
    }
    $result = mail($mailTo, $subject, $bodyMail, $headers); 
    
	if ($result){
	   echo "success";
	} else {
	    echo "Something went wrong :(";
	}
}
