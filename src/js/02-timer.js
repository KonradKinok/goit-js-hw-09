'use strict';
// Import
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//DOM
const startButton = document.querySelector('[data-start]');
const spanDays = document.querySelector('span[data-days]');
const spanHours = document.querySelector('span[data-hours]');
const spanMinutes = document.querySelector('span[data-minutes]');
const spanSeconds = document.querySelector('span[data-seconds]');

startButton.disabled = true;
let timeToCount = null;

//Datetime-picker options
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timeToCount = dateComparison(selectedDates[0]);
  },
};
//Datetime-picker
flatpickr('#datetime-picker', { ...options });

//Event Listener
startButton.addEventListener('click', () => {
  startButton.disabled = true;

  interval = setInterval(() => {
    if (timeToCount < 1000) {
      clearInterval(interval);
    }
    const unitOfTime = convertMs(timeToCount);

    spanDays.innerText = addLeadingZero(unitOfTime.days);
    spanHours.innerText = addLeadingZero(unitOfTime.hours);
    spanMinutes.innerText = addLeadingZero(unitOfTime.minutes);
    spanSeconds.innerText = addLeadingZero(unitOfTime.seconds);

    timeToCount -= 1000;
  }, 1000);
});

//Functions
/**Date Comparison
 *
 * @param {Date} selectedDate
 * @returns {Number} miliseconds
 */
function dateComparison(selectedDate) {
  const dateNow = new Date();
  if (selectedDate.getTime() > dateNow.getTime()) {
    startButton.disabled = false;
    return selectedDate.getTime() - dateNow.getTime();
  } else {
    startButton.disabled = true;
    Notify.warning('Please choose a date in the future');
  }
}

/**
 * Number of milliseconds per unit of time
 * @param {number} ms
 * @returns { days, hours, minutes, seconds }
 */
function convertMs(ms) {
  //
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day); // Remaining days
  const hours = Math.floor((ms % day) / hour); // Remaining hours
  const minutes = Math.floor(((ms % day) % hour) / minute); // Remaining minutes
  const seconds = Math.floor((((ms % day) % hour) % minute) / second); // Remaining seconds

  return { days, hours, minutes, seconds };
}

/**Add Leading Zero
 *
 * @param {number} value
 * @returns {string} value
 */
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
