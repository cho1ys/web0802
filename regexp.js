let str1 = 'I love Apple pie and apple juice';
let pattern = /apple/ig;
let result = str1.match(pattern);

document.getElementById('show').innerHTML = result;

let str2 = 'Hello World! This is a Test String';
let pattern2 = /[A-Z]/g;
let result2 = str2.match(pattern2);
document.getElementById('show').innerHTML += '<div>' +result2;

let str3 = '1 10 100 2000 30000';
let pattern3 = /\d{3}/g;
let result3 = str3.match(pattern3);
document.getElementById('show').innerHTML += '<div>' +result3;

let str4 = 'How do you do';
let pattern4 = /[o,d]/g;
let result4 = str4.match(pattern4);
document.getElementById('show').innerHTML += '<div>' +result4;

let str5 = '89139012349';
let pattern5 = /[9,0]/g;
let result5 = str5.match(pattern5);
document.getElementById('show').innerHTML += '<div>' +result5;

let str6 = 'A AA B BB Aa Bb AAA';
let pattern6 = /\bA{2}/g;
let result6 = str6.match(pattern6);
document.getElementById('show').innerHTML += '<div>' +result6;

let str7 = 'AA BB 12 345';
let pattern7 = /[0-9]+/g;
let result7 = str7.match(pattern7);
document.getElementById('show').innerHTML += '<div>' +result7;

