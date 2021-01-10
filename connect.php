<?php



$username = $_POST['username'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$password = $_POST['password'];

if (!empty($username) || !empty($email) || !empty($mobile) || !empty($password)){
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "pawcare";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    if (mysqli_connect_error()){
        die('Connection failed   : ' .mysqli_connect_error() );
    }else{
    
        $SELECT = "SELECT email From user Where email = ? Limit 1";
        $INSERT = "INSERT Into user (username, email, mobile, password) values (?,?,?,?)";

        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_row;

        if ($rnum==0){
            $stmt->close();

            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("ssis", $username, $email, $mobile, $password);

        $stmt->execute();
        echo "New record inserted successfully";
        }else{
            echo "Someone already registered using this email." ;
        }

        $stmt->close();
        $conn->clpse();
    
    }
    
}else{
    echo"All fields are required";
   die();
}


?>