// öv:1
var ps = require("prompt-sync");
var prompt = ps();

var number = prompt("give number: ")

if (number == 0) {
    console.log('number = 0')
}
else if (number > 0) {
    console.log('number is posetive')
}
else if (number < 0) {
    console.log('number is negative')
}

// öv:2
var ps = require("prompt-sync");
var prompt = ps();

var input = prompt("give input: ")

function caracter(ca) {
    const caracter = /[qwertyuiopåasdfghjklöäzxcvbnm]/
    return caracter.test(ca)
}
if (caracter(input)) {
    console.log('its a normal caracter')
}
else {
    console.log('its not a caracter')
}

// öv:3