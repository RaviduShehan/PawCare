<?php

    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "pawcare";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    $id = $_POST['id'];
$totalLikes = "No ";
$likeQuery = "SELECT sum(like_unlike) AS likesCount FROM tbl_like_unlike WHERE id=".$id;
$resultLikeQuery = mysqli_query($conn,$likeQuery);
$fetchLikes = mysqli_fetch_array($resultLikeQuery,MYSQLI_ASSOC);
if(isset($fetchLikes['likesCount'])) {
    $totalLikes = $fetchLikes['likesCount'];
}

echo $totalLikes;


    ?>