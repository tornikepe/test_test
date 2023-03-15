function myFunction() {
  const money = 1000;
  const bet = 5;
  const win = 0;
  const move = 0;
  document.getElementById("money").innerHTML = money;
  document.getElementById("bet").innerHTML = bet;
  document.getElementById("win").innerHTML = win;
  document.getElementById("move").innerHTML = move;

  const boxNumbers = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4];

  const boxes = document.querySelectorAll(".box");

  boxes.forEach((e) => {
    e.addEventListener("click", () => {
      const randomNumberInBoxNumbersArray = Math.floor(
        Math.random() * boxNumbers.length
      );
      const randomNumber = boxNumbers[randomNumberInBoxNumbersArray];
      e.textContent = randomNumber;
    });
  });
}
