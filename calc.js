// connects the HTML file to this JavaScript file
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");
var answer;

// tells JavaScript that it needs to do something when the button is clicked
button.addEventListener("click", doMath);

// if and else if functions tell JavaScript what to do when button is clicked
function doMath() {
    if (dropdown.value == "+") {
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    else if (dropdown.value == "-") {
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
    else if (dropdown.value == "x") {
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
    else if (dropdown.value == "/") {
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
    else if (dropdown.value == "^") {
        answer = Math.pow(input1.value, input2.value);
        display.innerHTML = answer;
    }
}