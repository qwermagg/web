const button = document.querySelector('#button');
const counter = document.querySelector('#counter');
const resetButton = document.querySelector('#reset-button');

let count = 0;

button.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

resetButton.addEventListener('click', () => {
  count = 0;
  counter.textContent = count;
});
