const mainContent = document.querySelector('#main-content');
const scoreDisplay = document.querySelector('#score');
const noOfQuestions = document.querySelector('#noOfQuestions');
let score = 0

const movieQuizQuestions = [
    {
        question: 'Who said "I\'ll be back!"?',
        answers: ['Superman', 'Robocop', 'The Terminator'],
        correct: 'The Terminator'
    },
    {
        question: 'Who was born on Krypton?',
        answers: ['Superman', 'Aquaman', 'Wonder Woman'],
        correct: 'Superman'
    },
    {
        question: 'Which Marvel character has a shield as a weapon?',
        answers: ['Groot', 'Captain America', 'Thor'],
        correct: 'Captain America'
    },
]

function addQuestions() {
    noOfQuestions.innerText = movieQuizQuestions.length
        
    movieQuizQuestions.forEach(question => {
        const questionArea = document.createElement('div')        
        const showOptionsBtn = document.createElement('button')
        const questionText = document.createElement('div')

        questionArea.classList.add('question-area');
        
        showOptionsBtn.classList.add('showOptionsBtn');
        showOptionsBtn.innerText = 'Show Answers'
        
        questionText.innerText = question.question
        
        mainContent.append(questionArea)
        questionArea.append(questionText)
        questionText.append(showOptionsBtn);
        
        questionArea.setAttribute('data-question', question.question)
        questionArea.setAttribute('data-answer-1', question.answers[0])
        questionArea.setAttribute('data-answer-2', question.answers[1])
        questionArea.setAttribute('data-answer-3', question.answers[2])
        questionArea.setAttribute('data-correct', question.correct)      

        questionArea.addEventListener('click', showAnswer)        
    })
}

function showAnswer() {
    // const answerDisplay = document.createElement('div')
    // answerDisplay.classList.add('answer-text')
    
    const firstButton = document.createElement('button')
    const secondButton = document.createElement('button')
    const thirdButton = document.createElement('button')

    firstButton.classList.add('first-button')
    secondButton.classList.add('second-button')
    thirdButton.classList.add('third-button')
    firstButton.innerHTML = this.getAttribute('data-answer-1')
    secondButton.innerHTML = this.getAttribute('data-answer-2')
    thirdButton.innerHTML = this.getAttribute('data-answer-3')
    firstButton.addEventListener('click', getResult)
    secondButton.addEventListener('click', getResult)
    thirdButton.addEventListener('click', getResult)

    this.append(firstButton, secondButton, thirdButton)

    const allQuestions = Array.from(document.querySelectorAll('.question-area'))
    allQuestions.forEach(quest => quest.removeEventListener('click', showAnswer))

}

function getResult() {   
    const questionOfButton = this.parentElement
    console.log(questionOfButton)

    if(questionOfButton.getAttribute('data-correct') == this.innerHTML) {          
        score++;
        scoreDisplay.innerHTML = score;        
    } else {
                console.log('try again')
    }
}

addQuestions()



