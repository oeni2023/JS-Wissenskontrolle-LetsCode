
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
            text = `" ${userInput} " ist <strong>KEIN</strong> Nummer!`;
        } else {
            text = `" ${userInput} " <strong>IST</strong> eine Nummer!`;
        }

    } else if (userOption === "filled") {
        if (userInput === undefined || userInput === null || userInput === " " || userInput === "") {
            text = `" ${userInput} " ist '<strong>NICHT</strong>' ausgefüllt!`;
        } else {
            text = `" ${userInput} " <strong>IST</strong> ausgefüllt!`;
        }

    } else if (userOption === "von10to20Zeichen") {
        if (userInput.length < 10 || userInput.length > 20) {
            text = `" ${userInput} " hat <strong>NICHT</strong> zwischen 10 and 20 Zeichen`;
        } else {
            text = `" ${userInput} " <strong>HAT</strong> zwischen 10 - 20 Zeichen`;
        }

    } else if (userOption === "containXand3and$") {
        if (userInput.includes("X") || userInput.includes("3") || userInput.includes("$")) {
            text = `" ${userInput} " <strong>ENTHÄLT</strong> ein "X", eine "3" oder ein "$"`;
        } else {
            text = `" ${userInput} " enthält <strong>KEIN</strong> "X", eine "3" oder ein "$"`;
        }
    }

    // Show output-message
    let output = document.getElementById("o-text");
    output.innerHTML = text;


    // Log output-message;
    let logEntry = document.createElement('div');
    logEntry.className = "log-entry";

    const time = new Date();
    const dateStr = time.toLocaleDateString();
    const timeStr = time.toLocaleTimeString();


    let outPutString =`[${dateStr} - ${timeStr}] -- ${text}`;
    let outputSection = document.getElementById("l-text");
    // outputSection.append(outPutString);
    outputSection.insertAdjacentHTML('beforeend', outPutString);
    linebreak = document.createElement("br");
    outputSection.append(linebreak);
}

