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

    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
	$comment = $_POST['comment'];
	// $stars = $_POST['password'];

    if (!empty($firstname) || !empty($lastname) || !empty($email) || !empty($comment)){
        // $sql = "INSERT INTO user (username, email, mobile, password)
        //         SELECT * FROM (SELECT '$username' AS username, '$email' AS email, '$mobile' AS mobile, '$password' AS password)
        //         WHERE NOT EXISTS (
        //         SELECT name FROM user WHERE email = $email
        //         ) LIMIT 1";

        $sql = "INSERT INTO comments (firstname, lastname, email, comment) 
		VALUES('$firstname', '$lastname', '$email', '$comment')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

        
    }else {
        echo"All fields are required";
        die();  
    }
    $conn->close();

?>
