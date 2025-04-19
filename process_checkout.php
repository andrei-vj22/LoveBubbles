<?php
//connection settings
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "checkout";

// create connection
$conn = new mysqli($servername, $username, $password, $dbname);


// get data
$first_name = $_POST['Fname'];
$last_name = $_POST['Lname'];
$contact_number = $_POST['mobile'];
$email = $_POST['email'];


$stmt = $conn->prepare("INSERT INTO users (first_name, last_name, contact_number, email) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $first_name, $last_name, $contact_number, $email);

// execute ng statement
if ($stmt->execute()) {
    header("Location: Checkout3.html");
    exit();  
}



$stmt->close();
$conn->close();
?>