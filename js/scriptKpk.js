/*
  Copyright (c) 2023 Wood Eddy Donald JEAN JULIEN. All rights reserved.
*/

/* global document, window, alert, console, require */

/* SECTION 1: DECLARE VARIABLES*/

// Get all the buttons with the class "digit"
var digitButtons = document.querySelectorAll('.digit');
// Get button with class "equal"
var equalButton = document.getElementById('equal');

/* SECTION 2: FUNCTIONS*/

// This function is created to erase the content of the memory and the display
function clearContent() {
    // Get the memory and display elements
    var memoryElement = document.getElementById('memory');
    var displayElement = document.getElementById('display');

    // Erase the content of the memory and display elements
    memoryElement.innerHTML = '';
    displayElement.innerHTML = '';
}

//This function will backspace the characters of the display one by one
function backspace() {
    // Get the display element
    var displayElement = document.getElementById('display');

    // Get the display content and remove the last character
    var displayContent = displayElement.innerHTML;
    displayContent = displayContent.substring(0, displayContent.length - 1);

    // Update the display content
    displayElement.innerHTML = displayContent;
}

// With this function I display the value of the button in the div "display"
function displayDigit(event) {
    // Get the element with the id "display"
    var displayElement = document.getElementById('display');

    // get the current content of the div "display"
    var currentContent = displayElement.innerHTML;

    // get the value of the button that was clicked
    var buttonValue = event.target.innerText;

    // Handle the case of the dot
    if (buttonValue === '.' && currentContent.includes('.')) {
        // The dot is already in the content, we do nothing
        return;
    }

    // Check if adding the new digit will exceed the maximum limit (18 digits)
    if (currentContent.length < 10) {
        displayElement.innerHTML += buttonValue;
    }
}

// Function called when button with id "operator" is clicked
function handleOperatorClick(event) {
    // Get the element div "display" and "memory"
    var displayElement = document.getElementById('display');
    var memoryElement = document.getElementById('memory');

    // Get the value of the clicked operator button
    var operatorSymbol = event.target.innerText;

    // Get the current value of the div "display"
    var displayValue = displayElement.innerHTML.trim();

    // If the div "display" is empty, display "0" before the symbol
    if (displayValue === '') {
        displayValue = '0';
    }

    // Display the value of the div "display" followed by the operator symbol in the div "memory"
    var memoryContent = memoryElement.innerHTML.trim();
    if (memoryContent.length + displayValue.length + operatorSymbol.length <= 10) {
        memoryElement.innerHTML = memoryContent + ' ' + displayValue + ' ' + operatorSymbol;
        displayElement.innerHTML = '';
    }
}

// Function called when a button with id "operator" is clicked
function handleOperatorClick(event) {
    // Get div "display" & "memory" elements
    var displayElement = document.getElementById('display');
    var memoryElement = document.getElementById('memory');

    // Get the value of the button clicked
    var operatorSymbol = event.target.innerText;

    // Get current value of div "display"
    var displayValue = displayElement.innerHTML.trim();

    // If "display" is empty print "0" before operator sign
    if (displayValue === '') {
        displayValue = '0';
    }

    // Get actual content of memory
    var memoryContent = memoryElement.innerHTML.trim();

    // Erase math calcul if div "memory" already contains number(s) && operator
    if (memoryContent !== '') {
        // Evaluation of the math expresion contained in "memory" & "display"
        var result = eval(memoryContent + ' ' + displayValue);

        // Display result follwed by the new operator in the div "memory"
        memoryElement.innerHTML = result + ' ' + operatorSymbol;

        // Reset content of div "display"
        displayElement.innerHTML = '';
    } else {
        // If div "memory" is empty, display content of div "display" and new operator
        memoryElement.innerHTML = displayValue + ' ' + operatorSymbol;

        // Empty content of div "display"
        displayElement.innerHTML = '';
    }
}

// Get all buttons with id "operator"
var operatorButtons = document.querySelectorAll('.operator');

// Link function to id "operator"
operatorButtons.forEach(function(button) {
    button.addEventListener('click', handleOperatorClick);
});

// This function performs the maths operations with elements contained in "display" & "memory"
function calculateResult() {
    // Get "display" & "memory" elements
    var displayElement = document.getElementById('display');
    var memoryElement = document.getElementById('memory');

    // Get content of "display" & "memory" elements
    var displayValue = displayElement.innerHTML.trim();
    var memoryValue = memoryElement.innerHTML.trim();

    // Verificate if boths of the values are empty
    if (displayValue !== '' && memoryValue !== '') {
        // Concatenate value of "memory" with value of "display" to form a complete math expression
        var mathExpression = memoryValue + ' ' + displayValue;

        // Use eval() function to evaluate math expression
        var result = eval(mathExpression);

        // Display result in div "display"
        displayElement.innerHTML = result;

        // Erase content of div "memory"
        memoryElement.innerHTML = '';
    }
}

/* SECTION 3: LOOPS*/

// Loop through the digit buttons
digitButtons.forEach(function(button) {
    button.addEventListener('click', displayDigit);
});

/* SECTION 4: FUNCTION CALLS & LINKS*/

//Call the cleraContent function when the clear button is clicked
document.getElementById('clear').addEventListener('click', clearContent);

//Call the backspace function when the backspace button is clicked
document.getElementById('backspace').addEventListener('click', backspace);

// Link fonction calculateResult to "equal" button
equalButton.addEventListener('click', calculateResult);

/* END OF THE CODE */





