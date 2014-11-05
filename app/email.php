<?php
	
$data = file_get_contents("php://input");
$objData = json_decode($data); 
$to = "abyrne85@gmail.com";

// define variables and initialize with empty values
$Err = "";
$name= htmlspecialchars($objData->name);            
$body= htmlspecialchars( $objData->message);
$from=htmlspecialchars($objData->email);  	  		

echo $name + ' ' $body + ' ' + $from;

?>