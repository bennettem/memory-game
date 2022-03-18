// global var
var brainEmoji = "🧠";
var numTiles = 20;
var startTime = 30;
var time = startTime;
var intervalId;
var score = 0;

var countdownEL = document.getElementById("countdown");
var scoreEl = document.getElementById("score");
var titleEl = document.getElementById("tiles");

var flippedTile1 = null;
var flippedTile2 = null;

// functions

function updateScore() {
  flippedTile1.classList.add("matched");
  flippedTile2.classList.add("matched");
  score++;
  scoreEl.innerText = score;
  flippedTile1 = null;
  flippedTile2 = null;
}

function unFlipTiles() {
  setTimeout(function () {
    flippedTile1.innerText = brainEmoji;
    flippedTile2.innerText = brainEmoji;
    flippedTile1.classList.remove("flipped");
    flippedTile2.classList.remove("flipped");
    flippedTile1 = null;
    flippedTile2 = null;
  }, 1000);
}

function compareTiles() {
  var num1 = flippedTile1.getAttribute("data-number");
  var num2 = flippedTile2.getAttribute("data-number");
  if (num1 === num2) {
    updateScore();
  } else {
    unFlipTiles();
  }
}

function handleTileClick(event) {
  if (flippedTile1 && flippedTile2) {
    return;
  }
  var clickedTile = event.target;
  var num = clickedTile.getAttribute("data-number");
  clickedTile.innerText = num;
  clickedTile.classList.add("flipped");
  if (!flippedTile1) {
    flippedTile1 = clickedTile;
  } else {
    flippedTile2 = clickedTile;
    compareTiles();
  }
}

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
  var shuffledNums = createShuffledNumbers();
  for (var i = 0; i < shuffledNums.length; i++) {
    var li = document.createElement("li");
    li.innerText = brainEmoji;
    li.setAttribute("data-number", shuffledNums[i]);
    li.setAttribute("class", "tile");
    li.addEventListener("click", handleTileClick);
    titleEl.appendChild(li);
  }
}

function startTimer() {
  intervalId = setInterval(function () {
    time--;
    countdownEL.innerText = time;
    if (time === 0) {
      gameOver();
    }
  }, 1000);
}

function gameOver() {
  clearInterval(intervalId);
  var initials = prompt("What are your initials?");
  var data = { initials: initials, score: score };
  localStorage.setItem("memoryGameChamp", JSON.stringify(data));

  var playAgain = confirm("Want to play again?");
  if (playAgain) {
    window.location.reload;
  }
}

function startRound() {
  createTiles();
  startTimer();
}

// main process
startRound();
