
/** TESTING AREA */

function validateInput () {
    // Get input
    let userInput = document.getElementById("i-text").value;
    let userOption = document.getElementById("i-select").value;
    // Create output-object
    let outputMessage = document.getElementById("l-text");

    // Validate input
    let text;
    if (userOption === "number") {
        if (isNaN(userInput) || userInput === undefined) {
            text = `" ${userInput} " is NOT a Number!`;
        } else {
            text = `" ${userInput} " IS a number!`;
        }

    } else if (userOption === "filled") {
        if (userInput === undefined) {
            text = `" ${userInput} " is NOT a ausgefüllt!`;
        } else {
            text = `" ${userInput} " IS a ausgefüllt!`;
        }

    } else if (userOption === "von10to20Zeichen") {
        if (userInput.length < 10 || userInput.length > 20) {
            text = `" ${userInput} " is <strong>NOT</strong> in the range 10 - 20`;
        } else {
            text = `" ${userInput} " <strong>IS</strong> in the range 10 - 20`;
        }

    } else if (userOption === "containXand3and$") {
        if (userInput.includes("X") || userInput.includes("3") || userInput.includes("$")) {
            text = `" ${userInput} " is <strong>BINGO</strong>`;
        } else {
            text = `<strong>BONGO</strong>`;
        }
    }

    // Show output-message
    let output = document.getElementById("o-text");
    output.innerHTML = text;


    // Log output-message;
    let logEntry = document.createElement('div');
    logEntry.className = "log-entry";
    // logEntry.innerHTML = "test";

    const time = new Date();
    const timeStr = time.toLocaleTimeString();

    let outPutString =`[${timeStr}] -- ${text}`;
    let outputSection = document.getElementById("l-text");
    outputSection.append(outPutString);
    linebreak = document.createElement("br");
    outputSection.append(linebreak);
}


//
// /** Get input*/
// function getInput() {
//     let inputValue = document.getElementById("i-text").value;
//     let inputValueType = inputValue;
//     // alert(`Your input is "${inputValue}"`)
//     return inputValue;
// }
// /** Get selected option */
// function getOptions (){
//     let selectedOption = document.getElementById("i-select").value;
//     // alert(`You selected "${document.getElementById("i-select").value}"`)
//     return selectedOption;
// }
//
// /** Write output to screen*/
// function writeOutput (input) {
//     let output = document.getElementById("o-text");
//     output.innerHTML = input;
//     return output;
// }
//
// /** Validate input*/
// function validateInput (input){
//     alert(`Eingabe: "${input}"`)
//     alert(`Typ der Eingabe: "${typeof input}"`);
// }
//
// function logOutput () {
//     let logEntry = document.createElement('div');
//     logEntry.className = "log-entry";
//     logEntry.innerHTML = "test";
//     /** Test write output */
//     const time = new Date();
//     const timeStr = time.toLocaleTimeString();
//
//     let outPutString =`${timeStr}--${getInput()}--${getOptions()}`;
//     document.body.append(outPutString);
// }
//
// function doValidation () {
//     /** Test function of button */
//     //alert("button clicked!");
//
//     /** Test get input value */
//     //alert(`Return from input: ${testGetInput()}`);
//     alert(`Type of input: ${typeof getInput()}`);
//
//     /** Test get selected option */
//     //alert(`Return from options. ${testOptions()}`);
//
//     /** Test write output */
//     const time = new Date();
//     const timeStr = time.toLocaleTimeString();
//
//     let outPutString =`${timeStr}--${getInput()}--${getOptions()}`;
//     writeOutput(outPutString);
//
//     /** validate input*/
//     //validateInput(testGetInput());
//
//     /** Test logging output*/
//     logOutput();
// }
