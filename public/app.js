// Tic Tac Toe Game Logic

// Initialize variables
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

// Function to check if there's a winner
function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    if (!board.includes('')) {
        gameOver = true; // It's a draw
        return 'draw';
    }

    return null; // No winner yet
}

// Function to handle a player's move
function handleMove(cell, index) {
    if (!gameOver && board[index] === '') {
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        
        const winner = checkWinner();
        if (winner) {
            gameOver = true;
            if (winner === 'draw') {
                setMessage('It\'s a draw!');
            } else {
                setMessage(`Player ${winner} wins!`);
            }
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            setMessage(`Player ${currentPlayer}'s Turn`);
        }
    }
}

// Function to display a message
function setMessage(message) {
    document.getElementById('message').textContent = message;
}

// Event listeners for each cell
const cells = document.querySelectorAll('.cell');
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        handleMove(cell, index);
    });
});

// Reset button click event
document.getElementById('reset-button').addEventListener('click', () => {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    setMessage(`Player ${currentPlayer}'s Turn`);
    cells.forEach(cell => {
        cell.textContent = '';
    });
});
