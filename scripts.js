const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");

function displayOn(element) {
    element.style.display = "unset";
}

function displayOff(element) {
    element.style.display = "none";
}

function formataTexto(texto) {
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    texto = texto.toLowerCase();

    return texto;
}

function copyText() {
    input2.select();
    navigator.clipboard.writeText(input2.value);

    let copyButton = document.querySelector(".copyButton");
    copyButton.textContent = "Copiado!";
}

function resetAside() {

    let inputValue = input1.value

    let figure1 = document.querySelector(".figure1");
    let asideText1 = document.querySelector(".mensagem_encontrada");
    let asideText2 = document.querySelector(".mensagem_instrução");
    let copyButton = document.querySelector(".copyButton");

    if (inputValue.trim() !== "") {
        displayOn(copyButton);
        displayOff(figure1);
        displayOff(asideText1);
        displayOff(asideText2);
        displayOn(input2);

        input2.value = inputValue;

    }
    else {
        copyButton.textContent = "Copiar"
        displayOff(copyButton);
        displayOn(figure1);
        displayOn(asideText1);
        displayOn(asideText2);
        displayOff(input2);
    }

    copyButton.textContent = "Copiar";
}

function Encrypt() {

    let input1Value = input1.value

    input1Value = formataTexto(input1Value);


    let textEcrypt = "";

    for (let i = 0; i < input1Value.length; i++) {

        let letra = input1Value[i];

        if (letra === "e") {
            textEcrypt += "enter";
        }
        else if (letra === "i") {
            textEcrypt += "imes";
        }
        else if (letra === "a") {
            textEcrypt += "ai"
        }
        else if (letra === "o") {
            textEcrypt += "ober";
        }
        else if (letra === "u") {
            textEcrypt += "ufat";
        }
        else {
            textEcrypt += letra;
        }
    }

    input2.value = textEcrypt;

}

function Descrypt(textInput) {

    let mat = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    textInput = formataTexto(textInput);

    for (let i = 0; i < mat.length; i++) {

        if (textInput.includes(mat[i][1])) {
            textInput = textInput.replaceAll(mat[i][1], mat[i][0]);
        }
    }

    return textInput;
}

function DescryptBtn() {

    const textDescrypt = Descrypt(input1.value);
    input2.value = textDescrypt;

}

input1.addEventListener("input", resetAside);


