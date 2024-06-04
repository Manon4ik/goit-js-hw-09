function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const wrapEl = document.querySelector('.wrap-for-action')
const btnStart = document.querySelector('.btn-start')
const btnStop = document.querySelector('.btn-stop')
let trimerId = null

btnStart && btnStart.addEventListener('click', function (event) {
    event.target.disabled = true;

    trimerId = setInterval(() => {

        wrapEl.style.backgroundColor = getRandomHexColor();

    }, 1000 );
})

btnStop && btnStop.addEventListener('click', function (event) {
    clearInterval(trimerId)
    btnStart.disabled = false
})