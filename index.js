const questions = document.querySelectorAll('.question');
const submitBtn = document.querySelector('.submit');
const score = document.querySelector('.score');
const isRightAnswers = new Array(questions.length);

let rightAnswers = 0;

questions.forEach(question => {
    const input = question.querySelector('label').querySelectorAll('input');
    input.forEach(input => {
        input.onchange = e => {
            isRightAnswers[e.target.className] = e.target.checked && e.target.value === "right";
        }
    })
});

submitBtn.onclick = (e) => {
    e.preventDefault();
    isRightAnswers.map((answer, index) => {
        if (answer) {
            questions[index].style.background = 'lightgreen'
            ++rightAnswers;
        } else {
            questions[index].style.background = 'lightgray'
        }
    })
    submitBtn.disabled = true
    score.textContent += rightAnswers;
}
