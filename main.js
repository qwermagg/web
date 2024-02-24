// Initialize click count
let clickCount = 0;

// Get references to the buttons and click count display
const clickButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');
const clickCountDisplay = document.getElementById('clickCount');

// Event listener for the click button
clickButton.addEventListener('click', () => {
    clickCount++;
    clickCountDisplay.textContent = clickCount;
});

// Event listener for the reset button
resetButton.addEventListener('click', () => {
    clickCount = 0;
    clickCountDisplay.textContent = clickCount;
});
