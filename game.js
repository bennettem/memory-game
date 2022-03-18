// global var
var brainEmoji = "🧠";
var numTiles = 20;
var startTime = 30;
var time = startTime;
var intervalId;

var countdownEL = document.getElementById("countdown");
var scoreEl = document.getElementById("score");
var titleEl = document.getElementById("tiles");

// console.log(countdownEL, scoreEl, tiles);

// functions
function handleTileClick() {}

function createTiles() {
  console.log("Creating tiles...");
  for (var i = 0; i < numTiles; i++) {
    var li = document.createElement("li");
    li.innerText = brainEmoji;
    li.setAttribute("data-number", 2);
    li.setAttribute("class", "tile");
    li.addEventListener("click", handleTileClick);
    console.log(li);
    titleEl.appendChild(li);
  }
}

function startTimer() {
  console.log("Starting timer...");
}

function startRound() {
  createTiles();
  startTimer();
}

// main process
startRound();
