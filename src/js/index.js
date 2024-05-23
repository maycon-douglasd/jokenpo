const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const tieScore = document.querySelector('#tie-score')

let humanScoreNumber = 0
let machineScoreNumber = 0
let tieScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log("Humano: " + human + " Maquina: " + machine)
    
    result.classList.remove('empate', 'ganhou', 'perdeu')
    
    if(human === machine) {
        tieScoreNumber++
        tieScore.innerHTML = tieScoreNumber
        result.innerHTML = "Deu empate!"
        result.classList.add('empate')

    } else if(
        (human === 'rock' && machine === 'scissors') || 
        (human === 'scissors' && machine === 'paper') || 
        (human === 'paper' && machine === 'rock')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
        result.classList.add('ganhou')

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a Alexa!"
        result.classList.add('perdeu')
    }
}
