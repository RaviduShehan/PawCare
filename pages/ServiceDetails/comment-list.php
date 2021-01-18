<?php

    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "pawcare";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    $sql = "SELECT petsittercomments.* FROM petsittercomments  ORDER BY id  desc";


    $result = mysqli_query($conn, $sql);
    $record_set = array();
    while ($row = mysqli_fetch_assoc($result)) {
        array_push($record_set, $row);
    }
    mysqli_free_result($result);
					
    mysqli_close($conn);
    echo json_encode($record_set);
    
?>