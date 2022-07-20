<?php 

    $name = $_POST['name'];
    $message = $_POST['message'];

    $header = "From: ".$name;
    $recipient = "formsubmissions@paulsprofile.com";
    $subject = "New form submission!";

    mail($recipient, $subject, $message, $header) 
    or die("Failed to send");

    echo "message sent successfully!";

?>