/*
var message = "Hello Wold"
console.log(message)
document.body.innerHTML = message;
*/

var req = new XMLHttpRequest();
//un listener
req.onload=function(e){

}

req.open("GET","https://api.github.com/users/luisfergromo")

//tipo de respuesta
req.responseType="json"