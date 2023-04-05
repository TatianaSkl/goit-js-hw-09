const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

btnStart.addEventListener('click', onStartChangeBackgroundColor);
btnStop.addEventListener('click', onStopChangeBackgroundColor);

let intervalId;

function onChangeBackgroundColor() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
}

function onStartChangeBackgroundColor() {
  btnStart.disabled = true;
  intervalId = setInterval(onChangeBackgroundColor, 1000);
}

function onStopChangeBackgroundColor() {
  btnStart.disabled = false;
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
