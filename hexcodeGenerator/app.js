function hexcodeGenerator() {

    var alphabets = "";
    var numbers = "";
    var possibleAlphabet = "ABCDEF";
    var possiblenumber = "0123456789"

    for (var i = 0; i < 2; i++) {
        alphabets += possibleAlphabet.charAt(Math.floor(Math.random() * possibleAlphabet.length));
    }
    for (var i = 0; i < 4; i++) {
        numbers += possiblenumber.charAt(Math.floor(Math.random() * possiblenumber.length));
    }

    document.body.style.backgroundColor = `#${numbers}${alphabets}`
    document.getElementById('hexInfo').innerText = `hexcode is #${numbers}${alphabets}`

}
