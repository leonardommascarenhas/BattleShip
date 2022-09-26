const ship = (length) => {
  const shipSize = [...Array(length).keys()];
  const hit = (index) => {
    shipSize[index] = "x";
  };
  const isSunk = () => {
    const check = shipSize.every((val, x, arr) => val === arr[0]);
    if (check == true) return true;
    else return false;
  };
  return {
    shipSize,
    hit,
    isSunk,
  };
};

const gameBoard = (size) => {
  let ammount = size * size;
  const boardArray = [...Array(ammount).keys()];
  let gameBoard = document.querySelector(".gameBoard");
  gameBoard.style.gridTemplateColumns = `repeat(${size}, 40px)`;
  gameBoard.style.gridTemplateRows = `repeat(${size}, 40px)`;
  const receiveAttack = (e) => {
    if (e.target.boardArray) {
    }
  };
  for (let i = 0; i < ammount; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    boardArray[i] = " ";
    pixel.innerHTML = boardArray[i];
    gameBoard.insertAdjacentElement("beforeend", pixel);
  }
  return {
    boardArray,
  };
};

const createShip = (append, length) => {
  let container = document.createElement("div");
  const a = ship(length);
  console.log(a);
  for (let i = 0; i < length; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    a.shipSize[i] = " ";
    pixel.innerHTML = a.shipSize[i];
    container.appendChild(pixel);
  }
  append.appendChild(container);
};

const fleet = () => {
  let fleet = document.querySelector(".fleet");
  let ship1 = createShip(fleet, 6);
  let ship2 = createShip(fleet, 5);
  let ship3 = createShip(fleet, 4);
  let ship4 = createShip(fleet, 3);
};

fleet();
const a = gameBoard(12);

console.log(a.boardArray);
