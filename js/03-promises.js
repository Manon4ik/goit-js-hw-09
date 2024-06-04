import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
        // Fulfill
    } else {
        // Reject
    }
}

const firstDelay = document.querySelector("input[name=delay]")
const step = document.querySelector("input[name=step]")
const amount = document.querySelector("input[name=amount]")

const formEl = document.querySelector(".form")



function getFormData(el) {

    const formData = {}

    new FormData(el).forEach((value, name) => (formData[name] = Number(value)));
    console.log(formData);
    return formData;

}

formEl && formEl.addEventListener("submit", function(event){
    event.preventDefault()
    console.log('click');  
    
    getFormData(event.currentTarget)
})


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

//getFormData(formEl)