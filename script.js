const input = document.getElementById('guess');
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');
const hint = document.getElementById('hint');
const attempts = document.getElementById('attempts');
const randomNumber = Math.floor(Math.random() * 100);
let attempt = 0;

function checkNumber() {
    attempt++;

    if(input.value == randomNumber) {
        hint.innerHTML = "Congrats!! You guessed the number";
        if(attempt <= 7) {
            attempts.innerHTML = `It took you ${attempt} attempts. Fabulous!!!`
        } else if(attempt <= 15) {
            attempts.innerHTML = `It took you ${attempt} attempts. Great!!!`
        } else if(attempt > 15) {
            attempts.innerHTML = `It took you ${attempt} attempts. Nice try!`
        }
    } else if(input.value > randomNumber+10) {
        hint.innerHTML = "You guessed too high!";
    } else if(input.value < randomNumber-10) {
        hint.innerHTML = "You guessed too low!";
    } else if(input.value > randomNumber) {
        hint.innerHTML = "You guess is high!";
    } else if(input.value < randomNumber) {
        hint.innerHTML = "You guess is low!";
    }
}

input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        checkNumber()
    }
});

submit.addEventListener('click', checkNumber);
reset.addEventListener('click', () => {
    window.location.reload()
})