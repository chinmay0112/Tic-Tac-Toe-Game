let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-button");
let winner = document.querySelector("#msg");
let newGameButton = document.querySelector("#game-button");
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Value = boxes[pattern[0]].innerText;
    let pos2Value = boxes[pattern[1]].innerText;
    let pos3Value = boxes[pattern[2]].innerText;

    if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
      if (pos1Value === pos2Value && pos2Value === pos3Value) {
        winner.innerText = `Winner is ${pos1Value}`;
        disableBoxes();
        resetButton.style.display = "none";
      }
    }
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    winner.innerText = "";
    resetButton.style.display = "initial";
  }
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
};

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
