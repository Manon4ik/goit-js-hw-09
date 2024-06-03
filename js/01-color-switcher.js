function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const wrapEl = document.querySelector('.wrap-for-action')
const btnStart = document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')
let trimerId = null


btnStart.addEventListener('click', function (event) {
    console.log('click');
    event.target.disabled =true;
    console.log('event:', event.target);

    trimerId = setInterval(() => {
        console.log('asd');
        wrapEl.style.backgroundColor = getRandomHexColor();

    }, 1000 );
})

btnStop.addEventListener('click', function (event) {
    clearInterval(trimerId)
    btnStart.disabled = false
})