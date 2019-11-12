var playerOne = {
  name: 'Player one',
  health: 100,
  currentCoordinates: { x: 0, y: 0 },
  shot: function(x, y) {
    console.log('Выстрел 1 игрока: ', x, y);
  },
  spawn: function(x, y) {
    (this.currentCoordinates.x = x), (this.currentCoordinates.y = y);
    console.log('Spawn player one:', x, y);
  },
  checkDamage: function() {
    if (playerTwo.health > 0) {
      for (var i = 0; i < 25; i++) {
        playerTwo.health--;
      }
    }
  }
};
var playerTwo = {
  name: 'Player two',
  health: 100,
  currentCoordinates: { x: 0, y: 0 },
  shot: function(x, y) {
    console.log('Выстрел 2 игрока: ', x, y);
  },
  spawn: function(x, y) {
    (this.currentCoordinates.x = x), (this.currentCoordinates.y = y);
    console.log('Spawn player two:', x, y);
  },
  checkDamage: function() {
    if (playerOne.health > 0) {
      for (var i = 0; i < 25; i++) {
        playerOne.health--;
      }
    }
  }
};

function spawnSolider() {
  var playerOneSpawnX;
  var playerOneSpawnY;
  var playerTwoSpawnX;
  var playerTwoSpawnY;

  do {
    playerOneSpawnX = Math.floor(Math.random() * 3);
    playerOneSpawnY = Math.floor(Math.random() * 3);

    playerTwoSpawnX = Math.floor(Math.random() * 3);
    playerTwoSpawnY = Math.floor(Math.random() * 3);
  } while (
    playerOneSpawnX === playerTwoSpawnX &&
    playerOneSpawnY === playerTwoSpawnY
  );
  playerOne.spawn(playerOneSpawnX, playerOneSpawnY);
  playerTwo.spawn(playerTwoSpawnX, playerTwoSpawnY);
}

spawnSolider();
setInterval(function() {
  do {
    var playerOneShotX = Math.floor(Math.random() * 3);
    var playerOneShotY = Math.floor(Math.random() * 3);
  } while (playerOneShotX === playerOne.currentCoordinates.x && playerOneShotY === playerOne.currentCoordinates.y);
  do {
    var playerTwoShotX = Math.floor(Math.random() * 3);
    var playerTwoShotY = Math.floor(Math.random() * 3);
  } while (playerTwoShotX === playerTwo.currentCoordinates.x && playerTwoShotY === playerTwo.currentCoordinates.y);

  playerOne.shot(playerOneShotX, playerOneShotY);
  playerTwo.shot(playerTwoShotX, playerTwoShotY);

  if (
    playerOneShotX === playerTwo.currentCoordinates.x &&
    playerOneShotY === playerTwo.currentCoordinates.y
  ) {
    playerOne.checkDamage();
  }

  if (
    playerTwoShotX === playerOne.currentCoordinates.x &&
    playerTwoShotY === playerOne.currentCoordinates.y
  ) {
    playerTwo.checkDamage();
  }
  if (playerTwo.health === 0) {
    console.log('Победил - ', playerOne.name);
    console.log('Проиграл - ', playerTwo.name);
  } else if (playerOne.health === 0) {
    console.log('Победил - ', playerTwo.name);
    console.log('Проиграл - ', playerOne.name);
  }
  clearInterval(playerOne.health === 0 || playerTwo.health === 0);
}, 100);