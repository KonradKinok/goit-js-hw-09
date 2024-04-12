'use strict';
// Import
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('form.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delayValue = form.elements.delay.value;
  const stepValue = form.elements.step.value;
  const amountValue = form.elements.amount.value;
  let delayPlusStep = form.elements.delay.value;
  for (let index = 1; index <= amountValue; index++) {
    console.log(index);

    createPromise(index, 1500)
      .then(({ index, delay }) => {
        console.log(`✅ Fulfilled promise ${index} in ${delay}ms`);
      })
      .catch(({ index, delay }) => {
        console.log(`❌ Rejected promise ${index} in ${delay}ms`);
      });
    delayPlusStep = form.elements.delay.value;
  }

  console.log(delayValue);
  console.log(stepValue);
  console.log(amountValue);
});
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
