// Global Variables
// Game Board Area
const gameArea = document.getElementById("game-area");
const gameAreaWidth = innerWidth - 100;
const gameAreaHeight = gameArea.offsetHeight - 100;

// Score
const scoreHeading = document.querySelector("#score span");
let score = 0;

// Mole image element and start position
const mole = document.getElementById("mole");
mole.style.top = gameAreaHeight / 2 + "px";
mole.style.left = gameAreaWidth / 2 + "px";

// Reset Button
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetGame);

function resetGame() {
  score = 0;
  scoreHeading.textContent = `${score}`;
  mole.style.top = gameAreaHeight / 2 + "px";
  mole.style.left = gameAreaWidth / 2 + "px";
}

// Shows and hides the mole at certain intervals, repeatedly
setInterval(function() {
  hideShowMole();
}, 2000);

// Event Listener on the Mole Image
mole.addEventListener("click", function() {
  score++;
  scoreHeading.textContent = `${score}`;
  hideShowMole();
});

// Function for hiding and showing the mole
function hideShowMole() {
  mole.style.display = "none";
  setMoleLocation();
  setTimeout(function() {
    mole.style.display = "inline";
  }, createInterval());
}

// Set the Mole's New Location
function setMoleLocation() {
  let coordinates = createPositionCoordinates();
  mole.style.top = coordinates.top + "px";
  mole.style.left = coordinates.left + "px";
}

// Creates Coordinates based on the getRandomIntInclusive Function
function createPositionCoordinates() {
  let coords = {
    top: getRandomIntInclusive(0, gameAreaHeight),
    left: getRandomIntInclusive(0, gameAreaWidth)
  };
  return coords;
}

// Create the time interval to be used in the setTimout and setInterval functions
function createInterval() {
  const timeIntervals = [250, 500, 1000, 1500, 2000];
  let interval = getRandomIntInclusive(0, 4);
  let timeInterval = timeIntervals[interval];
  return timeInterval;
}

// Function for creating a random number within a range
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/***
 * TODO
 * Create an intro Modal, explain rules -- make the mole go away
 * Add an animation when the mole comes back after getting clicked -- just text/tooltip
 * Multiply and shrink the mole when coming back after being clicked
 * Add a function when on hover every so often, the mole moves
 * Add a function when keydown (every so often), the mole moves
 ***/
