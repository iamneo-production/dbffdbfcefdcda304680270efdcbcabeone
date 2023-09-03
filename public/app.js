// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');

let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    if (cells[index] === '' && !isGameOver()) {
        cells[index] = currentPlayer;
        element.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateResult();
    }
};

// Function to check for a win or draw
const isGameOver = () => {
    for (let condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            result.textContent = `Player ${cells[a]} wins!`;
            return true;
        }
    }

    if (cells.every(cell => cell !== '')) {
        result.textContent = "It's a draw!";
        return true;
    }

    return false;
};

// Function to update the result
const updateResult = () => {
    if (!isGameOver()) {
        result.textContent = `Player ${currentPlayer}'s Turn`;
    }
};

// Add click event listeners to buttons
btns.forEach((btn, index) => {
    btn.addEventListener('click', () => ticTacToe(btn, index));
});

// Initialize the game
updateResult();