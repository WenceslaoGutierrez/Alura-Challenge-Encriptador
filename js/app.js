/* Message not found */
startingConditions();
/* Identify encrypt and decrypt button */
const buttonEncrypt=document.getElementById("encrypt");
const buttonDecrypt=document.getElementById("decrypt");
buttonEncrypt.addEventListener("click",encrypt);
buttonDecrypt.addEventListener("click",decrypt);
/* Copy Button and container */
const buttonContainer=document.createElement("DIV");
buttonContainer.classList.add("bottomContentSide","buttons--side");
buttonContainer.setAttribute("id","Copy");
const buttonCopy=document.createElement("INPUT");
buttonCopy.classList.add("buttons__button","buttons__button--secondary");
buttonCopy.setAttribute("type","button");
buttonCopy.setAttribute("value","Copiar");
buttonCopy.addEventListener("click",copy);
buttonContainer.appendChild(buttonCopy);
/* Save message from ID message */
const message = document.getElementById("message");
/* Array with chars and encryption keys */
const encryptionsChars = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
];
function encrypt() {
    /* Check if the message is valid */
    if (checkMessage()) return;
    let encryptedMessage = "";
    /* Encryption loop */
    for (let char of message.value) {
        /* Find current character in encryptionsChars */
        const replacement = encryptionsChars.find(pair => pair[0] === char);
        /* If it finds a replacement, adds it to the encrypted message */
        encryptedMessage += replacement ? replacement[1] : char;
    }
    updateMessage(encryptedMessage,"valid");
};
function decrypt(){
    /* Check if the message is valid */
    if (checkMessage()) return;
    /* Save the original message */
    let decryptedMessage=message.value;
    for (let pair of encryptionsChars) {
        const cipher = pair[1];
        const original = pair[0];
        decryptedMessage = decryptedMessage.replaceAll(cipher, original);
    }
    updateMessage(decryptedMessage,"valid");
};
function copyAdd(screenElement){
    screenElement.appendChild(buttonContainer);
};
function copy(){
    try{
        const messageConverted=document.getElementById("suggest").innerText;
        navigator.clipboard.writeText(messageConverted);
    }
    catch(error){
        console.log(error);
    };
}
function checkMessage(){
     /* Check if the message is empty */
    if(message.value.trim().length === 0){
        console.log("message is empty");
        updateMessage("","empty");
        return true;
    };
    /* Regex that isn't from a-z */
    const regex = /[^a-z\s]+/u;        
    /* Check if the message has special characters */
    if(regex.test(message.value)){
        console.log("message has special characters");
        updateMessage("","special");
        return true;
    };
};
function startingConditions(){
    const screenText=document.getElementById("messageScreen");
    document.getElementById("screen").classList.add("sideContent--image");
    const heading=document.createElement("H1");
    const suggest=document.createElement("P");
    heading.textContent="Ningún mensaje fue encontrado";
    heading.id="heading";
    suggest.textContent="Ingresa el texto que deseas encriptar o desencriptar";
    suggest.id="suggest";
    screenText.appendChild(heading);
    screenText.appendChild(suggest);
    updateMessage("","empty");
};
function updateMessage(message, status) {
    const screenElement = document.getElementById("screen");
    const screenText=document.getElementById("messageScreen");
    const headingElement = document.getElementById("heading");
    const suggestElement = document.getElementById("suggest");
    
    switch (status) {
        case "empty":
                updateMessageImages(screenElement,screenText,"remove");
                headingElement.textContent = "Ningún mensaje fue encontrado";
                suggestElement.textContent = "Asegurate de ingresar el texto que deseas encriptar o desencriptar";
            break;
            case "special":
                updateMessageImages(screenElement,screenText,"remove");
                headingElement.textContent = "Mensaje no válido";
                suggestElement.textContent = "Por favor asegúrate de solo utilizar letras minúsculas y sin acentos";
                break;
                case "valid":
                updateMessageImages(screenElement,screenText,"add");
                headingElement.textContent = "";
                suggestElement.textContent = message;
                copyAdd(screenElement);
                break;
                default:
                    break;
                };
};
function updateMessageImages(screenElement,screenText,type){
    if(type==="remove"){
        screenElement.classList.remove("sideContent--active");
        screenText.classList.remove("sideContent__texts--active");
        screenElement.classList.add("sideContent--image");
        try {
            const copy=document.getElementById("Copy");
            copy.remove();
        } catch (error) {
            console.log(error);
        };
        return;
    };
    if (type==="add"){
        screenElement.classList.add("sideContent--active");
        screenText.classList.add("sideContent__texts--active");
        screenElement.classList.remove("sideContent--image");
        return;
    };
};
