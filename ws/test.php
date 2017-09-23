<?php
if(!empty($GET['name']){
  $name=$_GET['name'];
  $price=get_price($name);
  
if(empty($price))
  //echo:"Book not found";
}else{
  //respond book price
}else{
  //throw invalid request
}
   function deliver_response($status,$status_message,$data){
   header("HTTP/1.1 $status $status_message");
     $response['status']=$status;
     $response['status_message']=$status_message;
     $response['data']=$data;
   }
?>
