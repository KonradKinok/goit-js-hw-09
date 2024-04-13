'use strict';
// Import
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//Dom
const form = document.querySelector('form.form');

//Event Listener
form.addEventListener('submit', event => {
  event.preventDefault();

  const delayValue = form.elements.delay.value;
  const stepValue = form.elements.step.value;
  const amountValue = form.elements.amount.value;
  let currentDelay = Number(delayValue);

  for (let position = 1; position <= amountValue; position++) {
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    currentDelay += Number(stepValue);
  }
});

/**CreatePromise
 *
 * @param {Number} position
 * @param {Number} delay
 * @returns Promise
 */
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
