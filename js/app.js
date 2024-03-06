/* Message not found */
messageNotFound();

/* Identify encrypt button */
const buttontest=document.getElementById("encrypt");
buttontest.addEventListener("click",encrypt);

function encrypt(){
    /* Save message from ID message */
    const message=document.getElementById("message").value;
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
};

function messageNotFound(){
    const heading=document.createElement("H1");
    const suggest=document.createElement("P");
    heading.textContent="Ningún mensaje fue encontrado";
    heading.id="heading"
    suggest.textContent="Ingresa el texto que deseas encriptar o desencriptar";
    suggest.id="suggest"
    const screen=document.getElementById("messageScreen");
    screen.appendChild(heading);
    screen.appendChild(suggest);
}