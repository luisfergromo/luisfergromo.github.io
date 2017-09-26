/*
var message = "Hello World";
console.log(message);
document.body.innerHTML = message;
*/
var req = new XMLHttpRequest();
req.onload = function (e) {
    var response = req.response;
    console.log(response);
    console.log(response.login);
};
req.open("GET", "https://api.github.com/users/luisfergromo");
req.responseType = "json";
req.send();
