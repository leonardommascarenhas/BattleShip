const ship = (length) => {
  const shipSize = [...Array(length).keys()];
  const isSunk = () => {
    if (shipSize.length == 0) return true;
  };
  return {
    shipSize,
    isSunk,
  };
};

const a = ship(0);
console.log(a);
console.log(a.isSunk());
