/*
// öv:1
var ps = require("prompt-sync");
var prompt = ps();

var number1 = prompt("give number: ")

var n1 = prompt("give interval n1: ")
var n2 = prompt("give interval n2: ")

if (((number1 > n1) && (number1 < n2)) || ((number1 < n1) && (number1 > n2))) {
    console.log('Inom intervall')
}
else if ((number1 < n1) || (number1 > n2)) {
    console.log('Utanför intervall')
}
else if ((number1 == n1) || (number1 == n2)) {
    console.log('n1 or n2 = number')
}
else {
    console.log('Error')
}

// öv:2
var ps = require("prompt-sync");
var prompt = ps();

var yearNumber1 = prompt("give year number: ")
if ((yearNumber1 % 400) && (yearNumber1 % 4)){
    console.log('inte skottår')
}
else {
    console.log('skottår')
}

// öv:3
var ps = require("prompt-sync");
var prompt = ps();

var month = prompt("give a month: ")

if ((month == 'January') || (month == 'March') || (month == 'May') || (month == 'July') || (month == 'August') || (month == 'October') || (month == 'December')) {
    console.log('31 days')
}
else if ((month == 'April') || (month == 'June') || (month == 'September') || (month == 'November')) {
    console.log('30 days')
}
else if (month == 'February') {
    console.log('28 - 29 days')
}
else {
    console.log('error')
}

// öv:4
var ps = require("prompt-sync");
var prompt = ps();

var [b1,b2,b3] = prompt('give 3 diferent numbers back to back: ')

if ((b1 > b2) && (b1 > b3)){
    console.log(b1)
}
else if (b2 > b3){
    console.log(b2)
}
else if (b3 > b2){
    console.log(b3)
}

// öv:5
var ps = require("prompt-sync");
var prompt = ps();

var [c1,c2,c3] = prompt('give 3 diferent numbers back to back: ')

const array = [c1,c2,c3]
array.sort()
console.log(array)

// öv:6
var ps = require("prompt-sync");
var prompt = ps();

var [d1,d2,d3] = prompt('give 3 diferent numbers back to back: ')

if ((d1 > d2) && (d1 > d3) && (d2 > d3)) {
    console.log('avtagande')
}
else if ((d1 < d2) && (d1 < d3) && (d2 < d3)) {
    console.log('Växande')
}
else {
    console.log('inget av dem')
}

// öv:7
function containsSpecialChars(be) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(be);
}
function containsNumbers(ba){
const numbers = /[1234567890]/
return numbers.test(ba)
}
function containsVowelsChars (bc){
    const vowelsChars =/[euioyåaöä]/
    return vowelsChars.test(bc)
}
function containsConsonantChars (bf){
    const consonantChars =/[qwrtpsdfghjklzxcvbnm]/
    return consonantChars.test(bf)
}

var ps = require("prompt-sync");
var prompt = ps();

var input = prompt('give input (number, caracter or special): ')

if (containsSpecialChars(input)) {
    console.log('contains special characters');
} 
if (containsNumbers(input)) {
    console.log('contains Numbers');
}
if (containsVowelsChars(input)) {
    console.log('contains vowels characters')
}
if (containsConsonantChars(input)) {
    console.log('contains consonant characters')
}
if ((containsConsonantChars(input) == false) && (containsVowelsChars(input) == false) && (containsNumbers(input) == false) && (containsSpecialChars(input) == false)) {
    console.log('error')
}
*/
// öv:8
var ps = require("prompt-sync")
var prompt = ps();

