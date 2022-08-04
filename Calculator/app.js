function getNumber(number) {
    let output = document.getElementById('output');
    return output.value += number;
}

function removeAll() {
    let output = document.getElementById('output');
    let res = document.getElementById('res');
    output.value = '';
    res.value = '';
}


function removeOne() {
    let currentValue = document.getElementById('output').value
    if (currentValue === '' || currentValue === undefined) {
        return alert("Nothing to remove !")
    }
    else {
        let element = '';
        for (let i = 0; i < currentValue.length; i++) {
            element += currentValue[i]
        }
        let removeOneValue = element.slice(0, -1)
        return output.value = removeOneValue;
    }
}

function equalValue() {
    let currentValue = document.getElementById('output');
    for (let i = 0; i < currentValue.value.length; i++) {
        if (currentValue.value.slice(i, i + 2) === "++" || currentValue.value.slice(i, i + 2) === "--" || currentValue.value.slice(i, i + 2) === "**" || currentValue.value.slice(i, i + 2) === "%%" || currentValue.value.slice(i, i + 2) === "//") {
            currentValue.value = '';
            return alert("Please add correct syntax to calculate");
        }
    }
    let res = document.getElementById('res');
    res.value = eval(currentValue.value);
    currentValue.value = '';


}
