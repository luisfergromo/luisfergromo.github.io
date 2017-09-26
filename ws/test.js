var message = "Hello Wold";
console.log(message);
document.body.innerHTML = message;
/*
var message = "hello world"
console.log(message)
document.body.innerHTML= message

var req = new XMLHttpRequest()

req.onload= function (e) {

    var response = req.response;
    console.log(response)
}

req.open("GET","https://api.github.com/users/luisfergromo/repos")
req.responseType="json"
req.send()
*/
var req = new XMLHttpRequest();
req.onload = function (e) {
    var response = req.response;
    console.log(response);
    var i = 0;
    console.log(response.routes.legs.ditance);
    console.log(response.routes.legs.duration);
    for (i = 0; i < 40; i++) {
        console.log(response.routes.legs.steps[i]);
    }
};
req.open("GET", "https://maps.googleapis.com/maps/api/directions/json?origin=20.637085, -103.430058&destination=20.646384, -103.413641&key=AIzaSyBAvGj8Asdi5OVQpxZAsk5TBOPzBB54WiQ");
req.responseType = "json";
//httpRequest.setRequestHeader('Access-Control-Allow-Origin:', '*');
//httpReq.setRequestHeader('Access-Control-Allow-Headers', '*');
req.send();
