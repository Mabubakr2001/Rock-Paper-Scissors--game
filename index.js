const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score')
const hint_p = document.querySelector('.hint')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')
const reset_button = document.querySelector('.reset-btn')

let userScore = 0
let compScore = 0
let smallUserWord = 'user'.fontsize(3).sub()
let smallCompWord = 'comp'.fontsize(3).sub()

function generateCompChoice(){
    const choices = ['r', 'p', 's']
    const randomNum = Math.floor(Math.random() * 3)
    return choices[randomNum]
}

function generateWord(letter){
    if (letter === 'r') return 'Rock'
    if (letter == 'p') return 'Paper'
    return 'Scissors'
}

function game(userChoice){
    const compChoice = generateCompChoice()
    switch(userChoice + compChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, compChoice)
            break
        case 'sr':
        case 'ps':
        case 'rp':
            lose(userChoice, compChoice)
            break
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, compChoice)
            break
    }
}

function win(userChoice, compChoice){
    userScore++
    userScore_span.innerHTML = userScore
    hint_p.innerHTML = `${generateWord(userChoice)}${smallUserWord} beats ${generateWord(compChoice)}${smallCompWord} , You win!`
    const userChoice_div = document.getElementById(userChoice)
    userChoice_div.classList.add('green-glow')
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 250)
}

function lose(userChoice, compChoice){
    compScore++
    compScore_span.innerHTML = compScore
    hint_p.innerHTML = `${generateWord(compChoice)}${smallCompWord} beats ${generateWord(userChoice)}${smallUserWord} , You lost!`
    const userChoice_div = document.getElementById(userChoice)
    userChoice_div.classList.add('red-glow')
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 250)
}

function draw(userChoice, compChoice){
    hint_p.innerHTML = `${generateWord(userChoice)}${smallUserWord} equals to ${generateWord(compChoice)}${smallCompWord} , It's a draw!`
    const userChoice_div = document.getElementById(userChoice)
    userChoice_div.classList.add('grey-glow')
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 250)
}

function resetGame(){
    userScore = 0
    compScore = 0
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    hint_p.innerHTML = 'Start the game...'
}

function main(){
    rock_div.addEventListener('click', () => game('r'))
    paper_div.addEventListener('click', () => game('p'))
    scissors_div.addEventListener('click', () => game('s'))
    reset_button.addEventListener('click', () => resetGame())
}

main()