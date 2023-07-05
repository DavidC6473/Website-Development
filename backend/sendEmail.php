<?php
header("Access-Control-Allow-Origin: https://david-clarke.com");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once '/home/davipofb/backend/sendgrid-php/vendor/autoload.php';
require_once '/home/davipofb/backend/config.php';

// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Create a new SendGrid email
$emailObject = new \SendGrid\Mail\Mail();
$emailObject->setFrom('d_cc@live.ie', 'david-clarke.com');
$emailObject->setSubject('New Contact Form Submission');
$emailObject->addTo('dcc6473@gmail.com'); // Replace with your email address
$emailObject->addContent(
    'text/plain',
    "Name: $name\nEmail: $email\nMessage: $message"
);

// Set your SendGrid API key
$sendgrid = new \SendGrid($apiKey);
try {
    $response = $sendgrid->send($emailObject);
    echo 'Email sent successfully';
} catch (Exception $e) {
    echo 'Failed to send email: ' . $e->getMessage();
}
