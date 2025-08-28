function startNewGame() {
  if (!players[0].name || !players[1].name) {
    alert("Please set custom players name for both players!");
    return;
  }

  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;

  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");
  switchPlayer();
}
