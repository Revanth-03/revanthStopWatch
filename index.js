//Elements we need to change/display
const hoursDisplay = document.querySelector(".hours");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const centisecondsDisplay = document.querySelector(".centiseconds");

//custom varibles for our purpose

let hours = 0;
let minutes = 0;
let seconds = 0;
let centiseconds = 0;
let intervalId;

//controls
//we can control by clicking

document.querySelector(".start").addEventListener("click", startTimer);
document.querySelector(".stop").addEventListener("click", stopTimer);
document.querySelector(".reset").addEventListener("click", resumeTimer);

//custom functions

//Function hepls to Start the Timer
function startTimer() {
  intervalId = setInterval(() => {
    centiseconds++;
    if (centiseconds === 100) {
      seconds++;
      centiseconds = 0;
    }
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
    updateDiplay();
  }, 10);
}

//Function to Stop the timer
function stopTimer() {
  clearInterval(intervalId);
}

//Funtion to Resume the timer
function resumeTimer() {
  clearInterval(intervalId);
  hours = 0;
  minutes = 0;
  seconds = 0;
  centiseconds = 0;
  updateDiplay();
}

//Function to UpdateDisplay
function updateDiplay() {
  hoursDisplay.textContent = pad(hours);
  minutesDisplay.textContent = pad(minutes);
  secondsDisplay.textContent = pad(seconds);
  centisecondsDisplay.textContent = pad(centiseconds);
}

//String Padding Function
function pad(number) {
  return number.toString().padStart(2, "0");
}
