let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

startButton.addEventListener('click', () => {
  if (intervalId) return;

  // Blokuje przycisk Start, aby nie można było go wielokrotnie klikać
  startButton.disabled = true;
  stopButton.disabled = false;

  // Zmień kolor tła co sekundę
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopButton.addEventListener('click', () => {
  // Zatrzymaje zmianę koloru tła
  clearInterval(intervalId);
  intervalId = null;

  // Odblokowuje przycisk Start
  startButton.disabled = false;
  stopButton.diasbled = true;
});
