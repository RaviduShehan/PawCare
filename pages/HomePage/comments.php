<?php

    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "pawcare";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

// Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
//   }
//   echo "Connected successfully";

// $parent_id = "";
// $firstname = $_POST['firstname'];
// $lastname = $_POST['lastname'];
// $comment = $_POST['comment'];
// $date = date('Y-m-d H:i:s');

// $sql = "INSERT INTO comments(parent_id,firstname,lastname,comment,comment_date) VALUES ('" . $parent_id . "','" . $firstname . "','" . $lastname . "','" . $comment . "','" . $date . "')";
// $result = mysqli_query($conn, $sql);

// if (! $result) {
//     $result = mysqli_error($conn);
// }
// echo $result;
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$id = isset($_POST['id']) ? $_POST['id'] : "";
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$comment = $_POST['comment'];
date_default_timezone_set("Asia/Colombo");
$date = date('Y-m-d H:i:s');

  if (!empty($firstname) || !empty($lastname) || !empty($comment) || !empty($date)){
      // $sql = "INSERT INTO user (username, email, mobile, password)
      //         SELECT * FROM (SELECT '$username' AS username, '$email' AS email, '$mobile' AS mobile, '$password' AS password)
      //         WHERE NOT EXISTS (
      //         SELECT name FROM user WHERE email = $email
      //         ) LIMIT 1";

      $sql = "INSERT INTO comments (parent_id,firstname, lastname, comment, comment_date) VALUES('$id','$firstname', '$lastname', '$comment', '$date')";

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