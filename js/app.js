/* Message not found */
messageNotFound();

/* Identify encrypt button */
const buttontest=document.getElementById("encrypt");
buttontest.addEventListener("click",encrypt);

function encrypt(){
    /* Save message from ID message */
    const message=document.getElementById("message").value;
    /* Check if the message is valid */
    if(checkMessage(message)) return;
    /* Split string into characters */
    const splitMessage=message.split("");
    /* Variable for encrypting message */
    let encryptedMessage="";

    /* Encryption loop */
    for(let i=0;i<splitMessage.length;i++){
        switch(splitMessage[i]){
            case "a":
                encryptedMessage+="ai";    
            break;
            case "e":
                encryptedMessage+="enter";    
            break;
            case "i":
                encryptedMessage+="imes";    
            break;
            case "o":
                encryptedMessage+="ober";    
            break;
            case "u":
                encryptedMessage+="ufat";    
            break;
            default:
                encryptedMessage+=splitMessage[i];
        }
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
    /* Regex with special characters, accents and uppercases */
    const regex = /[\p{P}\p{M}\p{Mn}\p{Lu}]+/u;        
    /* Check if the message has special characters */
    if(regex.test(message)){
        console.log("message has special characters")
        return true;
    };
};

function notValidMessage(message){
    /* Regex with special characters, accents and uppercases */
    const regex = /[\p{P} \p{M} \p{Mn} \p{Lu}]+/u;
    /* Check if the message has special characters */
    if(regex.test(message)){
        console.log("message has special characters")
        return true;
    };
}

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