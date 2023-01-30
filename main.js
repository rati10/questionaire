

const arr = [{

    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "when javascript launched?",
    a: "1994",
    b: "1995",
    c: "1996",
    d: "1997",
    correct: "b",
  },
  {
    question: 'When CSS launched?',
    a: '1994',
    b: '1995',
    c: '1996',
    d: '1997',
    correct: 'a'
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },

]

const question = document.querySelector('.question')
const answ = document.querySelectorAll('.answ')
const answer_a = document.querySelector('.answer_a')
const answer_b = document.querySelector('.answer_b')
const answer_c = document.querySelector('.answer_c')
const answer_d = document.querySelector('.answer_d')
const input = document.querySelectorAll('input')
const button = document.querySelector('button')
const content = document.querySelector('.content')


let index = 0
let score = 0

loadQuiz()
function loadQuiz() {
  deselectAnswer()
  let currentQuiz = arr[index]
  
  question.innerText = currentQuiz.question
  answer_a.innerText = currentQuiz.a
  answer_b.innerText = currentQuiz.b
  answer_c.innerText = currentQuiz.c
  answer_d.innerText = currentQuiz.d
}
function selectAnswer() {
  let answer = undefined

  input.forEach(inpu => {
    
    
    if(inpu.checked) {
      answer = inpu.id
    }
    })

  return answer
}

function deselectAnswer() {
  input.forEach(inpu => {
    inpu.checked = false
  })
}

button.addEventListener('click', () => {
  const answer = selectAnswer()
  
  if(answer) {
    if(answer === arr[index].correct) {
      score++
    }
    index++
    if(index < arr.length) {
      loadQuiz()
    } else {
      content.innerHTML = `<p class="question">you answered correctly at ${score}/${arr.length} questions.</p>
      <button onclick='location.reload()'>Reload</button>`
      
    }
  }
})


