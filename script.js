document.getElementById('newGameButton').addEventListener('click', newGame);

function newGame() {
  const colors = ['black', ...Array(12).fill('red'), ...Array(11).fill('blue'), ...Array(40).fill('white')];
  shuffleArray(colors);

  const gameBoard = document.getElementById('gameBoard');
  gameBoard.innerHTML = '';

  colors.forEach(color => {
    const card = document.createElement('div');
    card.className = `card ${color}`;
    gameBoard.appendChild(card);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

newGame(); // Initialize the first game
