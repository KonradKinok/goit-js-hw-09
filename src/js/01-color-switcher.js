'use strict';

/**
 *
 * @returns string Color
 */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//DOM
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let timer = null;

//Event Listeners
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  timer = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  }, 1000);
});

stopButton.addEventListener('click', () => {
  clearInterval(timer);
  startButton.disabled = false;
});
