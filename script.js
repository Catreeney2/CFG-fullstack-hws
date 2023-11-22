function addNumbers() {
    // Get the input values
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);

    if (isNaN(number1) || isNaN(number2)) {
        alert("Please enter only numberical values!");
        return;
    }

    // Perform the addition
    var result = number1 + number2;

    // Display the result
    document.getElementById('result').value = result;
}
