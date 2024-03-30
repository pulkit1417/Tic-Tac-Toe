let boxes = document.querySelectorAll("#box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let newBtnDraw = document.querySelector("#new-btn2");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let msg2 = document.querySelector("#msg2");
let draw1 = document.querySelector(".draw");
//hello
let turn0 = true; //PlayerX , PlayerO
let count = 0; // To Track Draw

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn0 = true;
  count = 0;
  // document.body.style.backgroundColor = "#0077b6";
  EnabledBoxes();
  msgContainer.classList.add("hide");
  draw1.classList.add("hide2");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      box.style.color = "#ECA400";
      turn0 = false;
    } else {
      box.innerText = "X";
      box.style.color = "#BC3908";
      turn0 = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();
    if (count == 9 && !isWinner) {
      draw();
    }
  });
});

const EnabledBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disabledBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations ,Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  // document.body.style.backgroundColor = "black";
  disabledBoxes();
};

const draw = () => {
  msg2.innerText = `The game ended in a draw.`;
  draw1.classList.remove("hide2");
  disabledBoxes();
};

const checkWinner = () => {
  for (pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
newBtnDraw.addEventListener("click", resetGame);
