var solider1 = {
  name: 'Solider1',
  health: 100,
  currentCoordinates: { x: 0, y: 0 },
  shot: function(x, y) {
    console.log('Выстрел 1 игрока: ', x, y);
  },
  spawn: function(x, y) {
    (this.currentCoordinates = x), y;
    console.log('Spawn1:', x, y);
  }
};
var solider2 = {
  name: 'Solider2',
  health: 100,
  currentCoordinates: { x: 0, y: 0 },
  shot: function(x, y) {
    console.log('Выстрел 2 игрока: ', x, y);
  },
  spawn: function(x, y) {
    (this.currentCoordinates = x), y;
    console.log('Spawn2:', x, y);
  }
};
var solider1SpawnX;
var solider1SpawnY;
var solider2SpawnX;
var solider2SpawnY;

function spawnSolider() {
  do {
    solider1SpawnX = Math.floor(Math.random() * 3);
    solider1SpawnY = Math.floor(Math.random() * 3);

    solider2SpawnX = Math.floor(Math.random() * 3);
    solider2SpawnY = Math.floor(Math.random() * 3);
  } while (
    solider1SpawnX == solider2SpawnX &&
    solider1SpawnY == solider2SpawnY
  );
  solider1.spawn(solider1SpawnX, solider1SpawnY);
  solider2.spawn(solider2SpawnX, solider2SpawnY);
}
spawnSolider();
setInterval(function() {
  do {
    var solider1ShotX = Math.floor(Math.random() * 3);
    var solider1ShotY = Math.floor(Math.random() * 3);
  } while (solider1ShotX == solider1SpawnX && solider1ShotY == solider1SpawnY);
  do {
    var solider2ShotX = Math.floor(Math.random() * 3);
    var solider2ShotY = Math.floor(Math.random() * 3);
  } while (solider2ShotX == solider2SpawnX && solider2ShotY == solider2SpawnY);

  solider1.shot(solider1ShotX, solider1ShotY);
  solider2.shot(solider2ShotX, solider2ShotY);

  if (solider1ShotX == solider2SpawnX && solider1ShotY == solider2SpawnY) {
    if (solider2.health > 0) {
      for (var i = 0; i < 25; i++) {
        solider2.health--;
      }
    }
  }

  if (solider2ShotX == solider1SpawnX && solider2ShotY == solider1SpawnY) {
    if (solider1.health > 0) {
      for (var i = 0; i < 25; i++) {
        solider1.health--;
      }
    }
  }
  if (solider2.health == 0) {
    console.log('Победил - ', solider1.name);
    console.log('Проиграл - ', solider2.name);
  } else if (solider1.health == 0) {
    console.log('Победил - ', solider2.name);
    console.log('Проиграл - ', solider1.name);
  }
  clearInterval(solider1.health == 0 || solider2.health == 0);
}, 100);
