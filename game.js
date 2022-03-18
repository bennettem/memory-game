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

function createShuffledNumbers() {
  var nums = [];
  for (var i = 0; i < numTiles / 2; i++) {
    var randNum = Math.floor(Math.random() * 500);
    nums.push(randNum, randNum);
  }
  nums = nums.sort(function () {
    return Math.random() - 0.5;
  });
  return nums;
}

function createTiles() {
  console.log("Creating tiles...");
  var ShuffledNums = createShuffledNumbers();
  for (var i = 0; i < ShuffledNums.length; i++) {
    var li = document.createElement("li");
    li.innerText = brainEmoji;
    li.setAttribute("data-number", ShuffledNums[i]);
    li.setAttribute("class", "tile");
    li.addEventListener("click", handleTileClick);
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
