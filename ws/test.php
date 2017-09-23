<?php
header("Content-Type:aplication/json");
if(!empty($GET['name']){
  $name=$_GET['name'];
  $price=get_price($name);
  
if(empty($price))
  //echo:"Book not found";
  delivery_response(200,"Book not found",NULL);
}else{
  //respond book price
  delivery_response(200,"Book found",$price);
}else{
  //throw invalid request
  delivery_response(400,"Invalid Request",NULL);
}
   function deliver_response($status,$status_message,$data){
   header("HTTP/1.1 $status $status_message");
     $response['status']=$status;
     $response['status_message']=$status_message;
     $response['data']=$data;
     $json_response=json_encode($response);
     echo $json_response;
   }
?>
