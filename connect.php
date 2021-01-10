<?php

// $username = $_POST['username'];
// $email = $_POST['email'];
// $mobile = $_POST['mobile'];
// $password = $_POST['password'];

// if (!empty($username) || !empty($email) || !empty($mobile) || !empty($password)){
//     $host = "localhost";
//     $dbUsername = "root";
//     $dbPassword = "";
//     $dbname = "pawcare";

//     $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

//     if (mysqli_connect_error()){
//         die('Connection failed   : ' .mysqli_connect_error() );
//     }else{
    
//         $SELECT = "SELECT email From user Where email = ? Limit 1";
//         $INSERT = "INSERT Into user (username, email, mobile, password) values (?,?,?,?)";

//         $stmt = $conn->prepare($SELECT);
//         $stmt->bind_param("s", $email);
//         $stmt->execute();
//         $stmt->bind_result($email);
//         $stmt->store_result();
//         $rnum = $stmt->num_row;

//         if ($rnum==0){
//             $stmt->close();

//             $stmt = $conn->prepare($INSERT);
//             $stmt->bind_param("ssis", $username, $email, $mobile, $password);

//         $stmt->execute();
//         echo "New record inserted successfully";
//         }else{
//             echo "Someone already registered using this email." ;
//         }
//     }

//         $stmt->close();
//         $conn->close();
    

    
// }else{
//     echo"All fields are required";
//    die();
// }


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

    $username = $_POST['username'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $password = $_POST['password'];

    if (!empty($username) || !empty($email) || !empty($mobile) || !empty($password)){
        // $sql = "INSERT INTO user (username, email, mobile, password)
        //         SELECT * FROM (SELECT '$username' AS username, '$email' AS email, '$mobile' AS mobile, '$password' AS password)
        //         WHERE NOT EXISTS (
        //         SELECT name FROM user WHERE email = $email
        //         ) LIMIT 1";

        $sql = "INSERT INTO user (username, email, mobile, password) VALUES('$username', '$email', '$mobile', '$password')";

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
