const ship = (length) => {
  const shipSize = [...Array(length).keys()];
  return {
    shipSize,
  };
};

console.log(ship(10));
