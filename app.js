let allGames = [];

async function loadGamesFromJSON() {
  try {
    const response = await fetch('games.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    allGames = await response.json();
    console.log('✅ Spil loaded:', allGames);
    
    allGames.forEach(game => displayGame(game)); // FIX: tilføj 'game =>'
  } catch (error) {
    console.error('❌ Fejl:', error);
  }
}

function displayGame(game) {
  const gameList = document.getElementById('spil-list');
  
  const gameCard = document.createElement('article');
  gameCard.className = 'game-card';
  
  gameCard.innerHTML = `
    <img src="${game.image}" alt="${game.title}" class="game-poster" />
    <div class="game-info">
      <h3>${game.title}</h3>
      <p class="game-rating">⭐ ${game.rating}/5</p>
      <p class="game-players">👥 ${game.players.min}-${game.players.max} spillere</p>
      <p class="game-genre">${game.genre}</p>
    </div>
  `;
  
  gameList.appendChild(gameCard);
}

loadGamesFromJSON();

