//Index script
var randomtitle = {};

function intervalrandomize() {
    randomtitle.interval = setInterval(function randomtitle() {
        document.querySelector('body div.main-container h1.scrambledtitle').innerHTML = Math.random().toString(18).substring(2, 6) + Math.random().toString(18).substring(2, 6);
    }, 150);
    setInterval(function randomize() {
        var texts = "";

        function makeid() {
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 1; i++)
                texts += possible.charAt(Math.floor(Math.random() * possible.length));
            return texts;
        };
        var texts = "";
        var circles = document.querySelectorAll("path.st0");
        var circleGroup = document.querySelectorAll("g.circle-g");
        var colors = [
            {
                color: "#FFCC00",
            }, {
                color: "#EFEFF4"
            }, {
                color: "#5D5D5D"
            }];
        var randomNumber = Math.floor(Math.random() * 3);
        var randomCircle = Math.floor(Math.random() * circles.length);
        circles[randomCircle].setAttribute("fill", colors[randomNumber].color);
        for (var i = 0; i < circles.length; i++) {
            var circleCoordinates = circles[i].getBBox();

        };
    }, 50);
}


function randomtitlestop() {
    clearInterval(randomtitle.interval);
    document.querySelector('body div.main-container h1.scrambledtitle').innerHTML = "helloooo"
}

//Vignere script
function SelectText() {
    var input = document.querySelector("message");
    input.focus();
    input.setSelectionRange(0, input.value.length);

}

function encode(encoding) {
    var key = document.querySelector("textarea.keyword-textarea").value;
    if (key.length == 0) {
        alert('Please write in a keyword');
        return;
    }
    var key = keyNumber(document.querySelector("textarea.keyword-textarea").value);
    var plaintext = document.querySelector("textarea.message");
    var outputField = document.querySelector("textarea.output");
    outputField.value = encrypt(plaintext.value, key);
}

function encrypt(input, key) {
    var output = "";
    for (var i = 0, l = 0; i < input.length; i++) {
        var uppercase = input.toUpperCase();

        if (64 < uppercase.charCodeAt(i) && uppercase.charCodeAt(i) < 91) {
            var cipherCharCode = (uppercase.charCodeAt(i) - 65 + key[l % key.length]) % 26 + 65;
            output += String.fromCharCode(cipherCharCode);
            l++;
        } else if (input.charCodeAt(i) == 32) {
            l++;
        } else {
            output = output + input.charAt(i);
            l++;
        }
    };
    return output;
};

function keyNumber(key) {
    var result = [];
    var uppercase = key.toUpperCase();
    for (var i = 0; i < key.length; i++) {
        var c = uppercase.charCodeAt(i);
        if (64 < c && c < 91) {
            result.push((c - 65) % 32);
        }
    }
    return result;
}

function decode(decoding) {
    var key = document.querySelector("textarea.keyword-textarea").value;
    if (key.length == 0) {
        alert('Please write in a keyword');
        return;
    }
    var key = keyNumber(document.querySelector("textarea.keyword-textarea").value);
    var plaintext = document.querySelector(".input_area .input-textarea");
    var outputField = document.querySelector("textarea.output");
    outputField.value = decrypt(plaintext.value, key);
}

function decrypt(input, key) {
    var output = "";
    for (var i = 0, z = 0; i < input.length; i++) {
        var uppercase = input.toUpperCase();
        if (64 < uppercase.charCodeAt(i) && uppercase.charCodeAt(i) < 91) {
            var cipherCharCode = (uppercase.charCodeAt(i) + 65 - key[z % key.length]) % 26 + 65;
            output += String.fromCharCode(cipherCharCode);
            z++;
        } else {
            output += input.charAt(i);
            z++;
        }

    }
    return output;
}
//T9 Script
function textLight(event) {
    var x = event.keyCode;
    if (x > 96 && x < 123) {
        var x = x - 32;

    }
    switch (x) {
        case 48:
            document.getElementById('_x30__circle').classList.add('st3');
            document.querySelector('g#_x30__1_ path.st2').classList.add('st4');
            break;
        case 49:
            document.getElementById('_x31__circle').classList.add('st3');
            document.querySelector('g#_x31__1_ path.st2').classList.add('st4');
            break;
        case 65:
        case 66:
        case 67:
        case 50:
            document.getElementById('_x32__circle').classList.add('st3');
            document.querySelector('g#_x32__1_ path.st2').classList.add('st4');
            break;
        case 68:
        case 69:
        case 70:
        case 51:

            document.getElementById('_x33__circle').classList.add('st3');
            document.querySelector('g#_x33__1_ path.st2').classList.add('st4');
            break;
        case 71:
        case 72:
        case 73:
        case 52:
            document.getElementById('_x34__circle').classList.add('st3');
            document.querySelector('g#_x34__1_ path.st2').classList.add('st4');
            break;
        case 74:
        case 75:
        case 76:
        case 53:
            document.getElementById('_x35__circle').classList.add('st3');
            document.querySelector('g#_x35__1_ path.st2').classList.add('st4');
            break;
        case 77:
        case 78:
        case 79:
        case 54:
            document.getElementById('_x36__circle').classList.add('st3');
            document.querySelector('g#_x36__1_ path.st2').classList.add('st4');
            break;
        case 80:
        case 81:
        case 82:
        case 83:
        case 55:
            document.getElementById('_x37__circle').classList.add('st3');
            document.querySelector('g#_x37__1_ path.st2').classList.add('st4');
            break;
        case 84:
        case 85:
        case 86:
        case 56:
            document.getElementById('_x38__circle').classList.add('st3');
            document.querySelector('g#_x38__1_ path.st2').classList.add('st4');
            break;
        case 87:
        case 88:
        case 89:
        case 90:
        case 57:
            document.getElementById('_x39__circle').classList.add('st3');
            document.querySelector('g#_x39__1_ path.st2').classList.add('st4');
            break;

    }
}

function textLightRemove() {
    setTimeout(function () {
        var LightOn = document.querySelectorAll('svg#T9 path');
        for (i = 0; i < LightOn.length; i++) {
            LightOn[i].classList.remove('st3');
            LightOn[i].classList.remove('st4');

        }
    }, 150);
}
var T9Alphabet = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
var T9Numbers = [2, 22, 222, 3, 33, 333, 4, 44, 444, 5, 55, 555, 6, 66, 666, 7, 77, 777, 7777, 8, 88, 888, 9, 99, 999, 9999];

function encodet9() {

    var plaintext = document.getElementById("telephone_message").value.toUpperCase();
    var output = "";
    document.getElementById("output-t9").innerHTML = output.toString();
    for (i = 0; i < plaintext.length; i++) {
        if (T9Alphabet.includes(plaintext[i])) {
            var alphabetnumber = T9Alphabet.indexOf(plaintext[i]);
            output += T9Numbers[alphabetnumber];
        } else {
            output += plaintext[i];
        }
        document.getElementById("output-t9").value = output.toString();
    }
    return output;
}

//Homophonic script

var Alphabet = ("BCDFGHJKLMPQRUVWXYZ").split("");
var cipheredAlphabet = ("XSFEHCITPGLKJOWMYBN").split("");
var FrequentAlphabet = ("D9Z721V3A5Q0R4U6").split("");

function encodeHomophonic() {

    var plainText = document.getElementById("message").value.toUpperCase();
    var output = [];
    document.getElementById("message").value = output.toString();
    for (i = 0, z = 0; i < plainText.length; i++) {
        if (Alphabet.includes(plainText[i])) {
            var alphabetnumber = Alphabet.indexOf(plainText[i]);
            output += cipheredAlphabet[alphabetnumber];
            z++;

        }

        switch (plainText[i]) {
            case "A":
                output += FrequentAlphabet[Math.floor(Math.random() * 2)];
                break;
            case "E":
                output += FrequentAlphabet[Math.floor(Math.random() * 4 + 2)];
                break;
            case "I":
                output += FrequentAlphabet[Math.floor(Math.random() * 2 + 6)];
                break;
            case "N":
                output += FrequentAlphabet[Math.floor(Math.random() * 2 + 8)];
                break;
            case "O":
                output += FrequentAlphabet[Math.floor(Math.random() * 2 + 10)];
                break;
            case "S":
                output += FrequentAlphabet[Math.floor(Math.random() * 2 + 12)];
                break;
            case "T":
                output += FrequentAlphabet[Math.floor(Math.random() * 2 + 14)];
                break;
        }

    }
    document.getElementById("message").value = output.toString();
}

function decodeHomophonic() {
    var plainText = document.getElementById("message").value.toUpperCase().split("");
    var output = [];
    document.getElementById("message").value = output.toString();
    for (i = 0, z = 0; i < plainText.length; i++, z++) {
        if (cipheredAlphabet.includes(plainText[i])) {
            var alphabetnumber = cipheredAlphabet.indexOf(plainText[i]);
            output += Alphabet[alphabetnumber];
            z++;

        }
        switch (plainText[i]) {
            case "D":
            case "9":
                output += "A";
                break;
            case "Z":
            case "7":
            case "2":
            case "1":
                output += "E";
                break;
            case "V":
            case "3":
                output += "I";
                break;
            case "A":
            case "5":
                output += "N";
                break;
            case "Q":
            case "0":
                output += "O";
                break;
            case "R":
            case "4":
                output += "S";
                break;
            case "U":
            case "6":
                output += "T";
                break;
        }
        document.getElementById("message").value = output.toString();
    }
}
