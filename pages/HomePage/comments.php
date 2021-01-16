<?php

$host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "pawcare";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";





?>