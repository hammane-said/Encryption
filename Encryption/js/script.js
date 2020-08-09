var input = document.getElementById("txt");
var output = document.getElementById("txt1");
var outputt = document.getElementById("txt2");

function Encrypt() {
    for (var i = 0; i < input.value.length; i++) {
        var x = input.value.charCodeAt(i) + i;
        output.value += String.fromCharCode(x);
    }
}

function Decrypt() {
    for (var i = 0; i < input.value.length; i++) {
        var x = input.value.charCodeAt(i) - i;
        outputt.value += String.fromCharCode(x);
    }
}

function reset() {
    input.value = "";
    output.value = "";
    outputt.value = "";
}