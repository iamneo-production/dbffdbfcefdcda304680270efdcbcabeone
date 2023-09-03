let currentPlayer = "X";
let gameEnded = false;

// Get the game cells
const cells = document.querySelectorAll(".box");

// Add click event listeners to cells
cells.forEach(cell => {
  cell.addEventListener("click", handleCellClick);
});

// Function to handle cell clicks
function handleCellClick() {
  if (!gameEnded && this.textContent === "") {
    this.textContent = currentPlayer;
    this.classList.add(currentPlayer);
    checkWin();
    togglePlayer();
  }
}

// Function to toggle between players
function togglePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  const resultText = document.querySelector(".result-text");
  resultText.textContent = `Player ${currentPlayer}'s Turn`;
}

// Function to check for a win
function checkWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a].textContent === ```javascript
                                                            if (
                                                                  cells[a].textContent === currentPlayer &&
                                                                        cells[b].textContent === currentPlayer &&
                                                                              cells[c].textContent === currentPlayer
                                                                                  ) {
                                                                                        endGame("Player ${ currentPlayer } wins!);
                                                                                              break;
                                                                                                  }
                                                                                                    }

                                                                                                      if (!gameEnded && Array.from(cells).every(cell => cell.textContent !== "")) {
                                                                                                          endGame("It's a draw!");
                                                                                                            }
                                                                                                            }

                                                                                                            // Function to end the game
                                                                                                            function endGame(result) {
                                                                                                              gameEnded = true;
                                                                                                                const resultText = document.querySelector(".result-text");
                                                                                                                  resultText.textContent = result;
                                                                                                                    const resetButton = document.querySelector("#reset-button");
                                                                                                                      resetButton.disabled = false;
                                                                                                                        resetButton.addEventListener("click", resetGame);
                                                                                                                        }

                                                                                                                        // Function to reset the game
                                                                                                                        function resetGame() {
                                                                                                                          currentPlayer = "X";
                                                                                                                            gameEnded = false;
                                                                                                                              const resultText = document.querySelector(".result-text");
                                                                                                                                resultText.textContent = "Player 1's Turn";
                                                                                                                                  const resetButton = document.querySelector("#reset-button");
                                                                                                                                    resetButton.disabled = true;
                                                                                                                                      cells.forEach(cell => {
                                                                                                                                          cell.textContent = "";
                                                                                                                                              cell.classList.remove("X", "O");
                                                                                                                                                }
                                                                                                                                                )
                                                                                                                                              );
                                                                                                                                              }