<?php
function get_price($find){
  $books=array(
  "java"=>299,
  "c"=>120,
  "php"=>123
  );
  foreach($books as $book=>$price){
    if($book==$find){
      return $price;
    break;
    }
  }
}
?>
