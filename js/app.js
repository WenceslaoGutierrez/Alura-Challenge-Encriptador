/* Message not found */
messageNotFound();

/* Identify encrypt button */
const buttontest=document.getElementById("encrypt");
buttontest.addEventListener("click",encrypt);

function encrypt() {
    /* Save message from ID message */
    const message = document.getElementById("message").value;
    /* Check if the message is valid */
    if (checkMessage(message)) return;

    /* Object with chars and encryptions */
    const encryptionsChars = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };

    /* Variable for encrypting message */
    let encryptedMessage = "";

    /* Encryption loop */
    for (let char of message) {
        /* Find current character in encryptionsChars */
        const replacement = encryptionsChars[char];
        /* If it finds a replacement, adds it to the encrypted message */
        encryptedMessage += replacement ? replacement : char;
    }

    console.log(encryptedMessage);
    updateMessage(encryptedMessage);
};
function checkMessage(message){
     /* Check if the message is empty */
    if(message.trim().length === 0){
        console.log("message is empty");
        return true;
    };
    /* Regex that isn't from a-z or a number */
    const regex = /[^a-z0-9\s]+/u;        
    /* Check if the message has special characters */
    if(regex.test(message)){
        console.log("message has special characters")
        return true;
    };
};
function messageNotFound(){
    const screenText=document.getElementById("messageScreen");
    document.getElementById("screen").classList.add("sideContent--image");
    const heading=document.createElement("H1");
    const suggest=document.createElement("P");
    heading.textContent="Ningún mensaje fue encontrado";
    heading.id="heading"
    suggest.textContent="Ingresa el texto que deseas encriptar o desencriptar";
    suggest.id="suggest"
    screenText.appendChild(heading);
    screenText.appendChild(suggest);
};
function updateMessage(message){
    document.getElementById("screen").classList.remove("sideContent--image");
    document.getElementById("heading").textContent="";
    document.getElementById("suggest").textContent=message;
};