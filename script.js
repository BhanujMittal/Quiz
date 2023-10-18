const submit = document.getElementById('submit');
let ra1 = document.getElementById('kohli')
let ra2 = document.getElementById('rohit1')
let ra3 = document.getElementById('bumrah')
let ra4 = document.getElementById('amarnath')
let ra5 = document.getElementById('zaheer')
let ra6 = document.getElementById('gymkhana')
let ra7 = document.getElementById('_yuvraj')
let ra8 = document.getElementById('_1996')
let ra9 = document.getElementById('eng')
let ra10 = document.getElementById('england')
let arr = [ra1, ra2, ra3, ra4, ra5, ra6, ra7, ra8, ra9, ra10]
let correct = document.getElementsByClassName('correct')[0]
let check = document.getElementsByClassName('checkData')[0]
let wrong = document.getElementsByClassName('wrong')[0];
const correctAnswers = ["kohli", "rohit1", "bumrah", "amarnath", "zaheer", "gymkhana", "_yuvraj", "_1996", "eng", "england"];

const radioButtons = document.querySelectorAll('input[type="radio"]');
let score = 0;

submit.addEventListener("click", function (e) {
    e.preventDefault()
    let allQuestionsAnswered = true;

    for (let i = 1; i <= 10; i++) {
        const questionInputs = document.querySelectorAll(`.question-${i} input[type="radio"]`);
        if (!Array.from(questionInputs).some(input => input.checked)) {
            allQuestionsAnswered = false;
            break;
        }
    }

    if (allQuestionsAnswered) {
        document.getElementById('carouselExample').style.display = 'none'
        Array.from(arr).forEach((input) => {
            if (input.checked) {
                score++;
                check.style.display = 'flex'
                correct.appendChild(input.closest('.question'));
            }
            else {
                wrong.appendChild(input.closest('.question'));
                let correct_answer = wrong.querySelectorAll('.correct-answer')
                correct_answer.forEach((p) => {
                    p.style.display = 'block'
                })

            }
        })
        correct.prepend(`You've successfully answered ${score} questions.`)
        wrong.prepend(`You've answered ${10 - score} wrong questions.`)
        let p = document.createElement('p')
        p.style.textAlign = 'center';
        p.innerHTML = `Your score is ${score}`;
        check.prepend(p);
        radioButtons.forEach((input) => {
            input.disabled = true;
            arr.forEach((input) => {
                if(input.checked) {
                    input.disabled = false;
                }
            })
        })
        document.querySelectorAll('button').forEach((btn) => {
            btn.style.display = 'none'
        })
    } else {
        alert("Failed: Please answer all questions before submitting.");
    }
});