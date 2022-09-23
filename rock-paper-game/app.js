// generate Computer Choice
const checkComputerChoice = () => {
    let computerOptions = ["Rock", "Paper", "Sizer"];
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            random === 0
            return computerOptions[0];
        case 1:
            random === 1
            return computerOptions[1];
        case 2:
            random === 2
            return computerOptions[2];
    }
}
checkComputerChoice();

// check user choice with computer choice
const userChoice = (userChoice) => {
    let containerTwo = document.querySelector('.container-two');
    let containerThree = document.querySelector('.container-three');
    let winner = document.querySelector('.winner');
    if (userChoice === "Rock" && checkComputerChoice() === "Sizer") {
        containerTwo.style.display = 'none';
        containerThree.style.display = 'flex';
        winner.innerHTML = `
        <h1 class="text-lg font-semibold my-4 text-center mt-2 font-mono md:text-xl">congratulations User wins ❤</h1>`
    }
    else if (userChoice === "Paper" && checkComputerChoice() === "Rock") {
        containerTwo.style.display = 'none';
        containerThree.style.display = 'flex';
        winner.innerHTML = `
        <h1 class="text-lg font-semibold my-4 text-center mt-2 font-mono md:text-xl">congratulations User wins ❤</h1>`
    }
    else if (userChoice === "Sizer" && checkComputerChoice() === "Paper") {
        containerTwo.style.display = 'none';
        containerThree.style.display = 'flex';
        winner.innerHTML = `
        <h1 class="text-lg font-semibold my-4 text-center mt-2 font-mono md:text-xl">congratulations User wins ❤</h1>`

    }
    else {
        containerTwo.style.display = 'none';
        containerThree.style.display = 'flex';
        winner.innerHTML = `
        <h1 class="text-lg font-semibold my-4 text-center mt-2 font-mono md:text-xl">congratulations Computer wins 😁</h1>`
    }
}

// check functionality
const checkFunctionality = () => {
    let message = document.querySelector('.message')
    let containerOne = document.querySelector('.container-one');
    let containerTwo = document.querySelector('.container-two');
    let displayName = document.querySelector('#displayName')
    let myName = document.querySelector('.my-name').value
    // console.log(myName)
    if (myName === '' || myName.length < 3) {
        //    alert("kch dal")
        message.innerHTML = `
     <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <span class="block sm:inline">Please add your name to continue</span>
      </div>	
    `

        function closeMessage() {
            message.innerHTML = ""
        }
        setTimeout(closeMessage, 1000);
    }
    else {
        containerOne.style.display = 'none';
        containerTwo.style.display = 'flex';
        displayName.innerHTML = `<h1 class="text-lg font-semibold my-4 text-center mt-2 font-mono md:text-xl">Welcome ${myName} to Rock Paper Sizer Game !</h1>`
    }


}


// startAgain
const startAgain = () => {
    let myName = document.querySelector('.my-name')
    document.querySelector('.container-one').style.display = 'flex';
    document.querySelector('.container-two').style.display = 'none';
    document.querySelector('.container-three').style.display = 'none';
    myName.value = '';
}