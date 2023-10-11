<?php
// Get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
 
$to = "annaball85@gmail.com";
$subject = "This is the subject line";
 
// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message 
$txt ="Name = ". $name . "\r\n  Email = "
    . $email . "\r\n Message =" . $message;
 
$headers = "From: noreply@demosite.com" . "\r\n" .
            "CC: annaball85@gmail.com";
if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}

?>
    Thank you for contacting us. We will be in touch with you very soon.  Return to <a href="index.html">Home Page</a>

<?php
}
?>