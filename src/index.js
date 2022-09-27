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
  gameBoard.style.gridTemplateColumns = `repeat(${size}, 35px)`;
  gameBoard.style.gridTemplateRows = `repeat(${size}, 35px)`;
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
  for (let i = 0; i < length; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    a.shipSize[i] = " ";
    square.innerHTML = a.shipSize[i];
    container.appendChild(square);
  }
  container.classList.add("ships");
  append.appendChild(container);
  return a;
};

const fleet = () => {
  let fleet = document.querySelector(".fleet");
  let ship1 = createShip(fleet, 6);
  let ship2 = createShip(fleet, 5);
  let ship3 = createShip(fleet, 4);
  let ship4 = createShip(fleet, 3);
};

fleet();
gameBoard(12);
let ships = document.querySelectorAll(".ships");
let pixels = document.querySelectorAll(".pixel");
let gameboard = document.querySelector(".gameBoard");
ships.forEach((ships) => {
  ships.addEventListener("dragstart", () => {
    ships.classList.add("dragging");
  });
  ships.addEventListener("dragend", () => {
    ships.classList.remove("dragging");
  });
});
pixels.forEach((pixel) => {
  pixel.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggable = document.querySelector(".dragging");
    pixel.appendChild(draggable);
  });
});
