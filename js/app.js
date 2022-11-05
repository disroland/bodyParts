
let question = document.querySelector('.question')
let score = document.querySelector('.score span')
let answer = document.querySelector('.answer input')
let answerBtn = document.querySelector('.answer button')
let bodyTest = document.querySelector('.body-test')
let headTest = document.querySelector('.head-test')

let head = [['ear.jpeg', 'ухо'], ['eye.jpeg', 'глаз'], ['nose.jpeg', 'нос'], ['hair.jpeg', 'волосы'], ['tooth.jpeg', 'зуб'], ['tongue.jpeg', 'язык'], ['mouth.jpeg', 'рот']]
let body = [['back.jpeg', 'спина'], ['foot.jpeg', 'нога (стопа)'], ['hand.jpeg', 'рука'], ['stomach.png', 'живот'], ['leg.png', 'нога (полностью)']]

score.innerTEXT = 0
let temp
let selected = []
let selLength

headTest.addEventListener('click', (e) => {
    selected = head
    selLength = head.length
    if (head.length > 0) {temp = head.pop()
    question.innerHTML = `<img src="./img/${temp[0]}" alt="question">
    <p>Как на английском будет ${temp[1]}?</p>`    
    console.log(temp)
    answer.focus()
    }
    },{once:true})

bodyTest.addEventListener('click', (e) => {
    selected = body
    selLength = body.length
    if (body.length > 0) {temp = body.pop()
    question.innerHTML = `<img src="./img/${temp[0]}" alt="question">
    <p>Как на английском будет ${temp[1]}?</p>`    
    console.log(temp)
    answer.focus()
    }
    },{once:true})



let check = (el1, el2) => {if (el2.length > 0 && el1.indexOf(el2)>=0) {
    console.log('score')
    score.innerHTML = Number(score.innerHTML) + 1}}

let nextQuestion = (e) => {
    
    console.log(selected)
    check(temp[0], answer.value)
    answer.value = ''
    if (selected.length > 0) {temp = selected.pop()
    question.innerHTML = `<img src="./img/${temp[0]}" alt="question">
    <p>Как на английском будет ${temp[1]}?</p>`    
    console.log(temp[0], answer.value)
    answer.focus()
    } else {question.innerHTML = `<h2>Твой результат - ${score.innerHTML} баллов из ${selLength}.</h2>
    <button id='refresh' onclick=location.reload()>Попробовать еще раз</button>`}
    }
answerBtn.addEventListener('click', nextQuestion)
