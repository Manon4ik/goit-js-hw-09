import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        checkSelectedData(selectedDates[0])
    },
    // onClose(selectedDates) {
    //     console.log(selectedDates[0]);
    // },
};

flatpickr("#datetime-picker", options);

const timerEl = document.querySelector(".timer")
const timerDays = timerEl.querySelector('[data-days]');
const timerHours = timerEl.querySelector('[data-hours]');
const timerMinutes = timerEl.querySelector('[data-minutes]');
const timerSeconds = timerEl.querySelector('[data-seconds]');

const startTimer = document.querySelector(".start-timer");
let userDate = null;

function checkSelectedData(param) {

    userDate = Math.round(new Date(param).getTime())
    const now = Math.round(new Date().getTime())

    if (userDate > now) {
        startTimer.disabled = false;
    } else {
        startTimer.disabled = true;
        //window.alert("Please choose a date in the future")
        Notify.failure("Please choose a date in the future");
    }
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

// function addLeadingZero(value) {
//     return value.toString().padStart(2, "0")
// }

const addLeadingZero = (value) => value.toString().padStart(2, "0")

startTimer && startTimer.addEventListener("click", function (event) {

    setInterval(() => {

        let { days, hours, minutes, seconds } = convertMs(userDate - Math.round(new Date().getTime()))

        timerDays.textContent = addLeadingZero(days)
        timerHours.textContent = addLeadingZero(hours)
        timerMinutes.textContent = addLeadingZero(minutes)
        timerSeconds.textContent = addLeadingZero(seconds)

    }, 1000)

})