
/** TESTING AREA */

function tester () {
    // Get input
    let testInput = document.getElementById("t-text").value;
    let tSelect = document.getElementById("t-select").value;
    // Create output-object
    let outputMessage = document.getElementById("t-out");


    let text;
    // if (isNaN(testInput) && tSelect === "numerisch") {
    //     text = `" ${testInput} " is NOT a Number!`;
    // } else if (testInput) {
    //     text = `" ${testInput} " IS a number!`
    // }
    if (tSelect === "numerisch") {
        if (isNaN(testInput) || testInput === undefined) {
            text = `" ${testInput} " is NOT a Number!`;
        } else {
            text = `" ${testInput} " IS a number!`;
        }

    } else if (tSelect === "ausgefüllt") {
        if (testInput === undefined) {
            text = `" ${testInput} " is NOT a ausgefüllt!`;
        } else {
            text = `" ${testInput} " IS a ausgefüllt!`;
        }

    } else if (tSelect === "zwischen 10 und 20 Zeichen") {
        if (testInput.length < 10 || testInput.length > 20) {
            text = `" ${testInput} " is <strong>NOT</strong> in the range 10 - 20`;
        } else {
            text = `" ${testInput} " <strong>IS</strong> in the range 10 - 20`;
        }

    } else if (tSelect === "enthält ein 'X', eine '3' und ein '$'") {
        if (testInput.contains("X") || testInput.contains("3") || testInput.contains("$")) {
            text = `" ${testInput} " is <strong>BINGO</strong>`;
        } else {
            text = `<strong>BONGO</strong>`;
        }
    }



    // Show output-message
    outputMessage.innerHTML = text + " ---";


    // return outputMessage;
}

/** Get input*/
function getInput() {
    let inputValue = document.getElementById("i-text").value;
    let inputValueType = inputValue;
    // alert(`Your input is "${inputValue}"`)
    return inputValue;
}
/** Get selected option */
function getOptions (){
    let selectedOption = document.getElementById("i-select").value;
    // alert(`You selected "${document.getElementById("i-select").value}"`)
    return selectedOption;
}

/** Write output to screen*/
function writeOutput (input) {
    let output = document.getElementById("o-text");
    output.innerHTML = input;
    return output;
}

/** Validate input*/
function validateInput (input){
    alert(`Eingabe: "${input}"`)
    alert(`Typ der Eingabe: "${typeof input}"`);
}

function logOutput () {
    let logEntry = document.createElement('div');
    logEntry.className = "log-entry";
    logEntry.innerHTML = "test";
    /** Test write output */
    const time = new Date();
    const timeStr = time.toLocaleTimeString();

    let outPutString =`${timeStr}--${getInput()}--${getOptions()}`;
    document.body.append(outPutString);
}

function doValidation () {
    /** Test function of button */
    //alert("button clicked!");

    /** Test get input value */
    //alert(`Return from input: ${testGetInput()}`);
    alert(`Type of input: ${typeof getInput()}`);

    /** Test get selected option */
    //alert(`Return from options. ${testOptions()}`);

    /** Test write output */
    const time = new Date();
    const timeStr = time.toLocaleTimeString();

    let outPutString =`${timeStr}--${getInput()}--${getOptions()}`;
    writeOutput(outPutString);

    /** validate input*/
    //validateInput(testGetInput());

    /** Test logging output*/
    logOutput();
}
