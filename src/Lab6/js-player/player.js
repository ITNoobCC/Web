function Song(nameSong, lengthSong) {
  // название, длительность
  this.nameSong = nameSong;
  this.lengthSong = lengthSong;
}

function PlayerList(song) {
  // хранит список песен
  this.songs = [song];
}

function Player(playerList) {
  this.playerList = playerList;
  var i = 0;
  this.status = 'play';
  this.currentTrack = playerList.songs[0][0].nameSong;

  this.display = function() {
    return 'Track: ' + this.currentTrack + ' Status: ' + this.status;
  };

  this.play = function() {
    this.status = 'play';
  };

  this.stop = function() {
    this.status = 'stop';
  };

  this.pause = function() {
    this.status = 'pause';
  };

  this.next = function() {
    if (i != playerList.songs[0].length - 1) {
      i++;
      this.currentTrack = playerList.songs[0][i].nameSong;
    } else {
      i = 0;
      this.currentTrack = playerList.songs[0][i].nameSong;
    }
  };

  this.prev = function() {
    if (i != 0) {
      i--;
      this.currentTrack = playerList.songs[0][i].nameSong;
    } else {
      i = playerList.songs[0].length - 1;
      this.currentTrack = playerList.songs[0][i].nameSong;
    }
  };
}

var playerList = new PlayerList([
  new Song('One', 1),
  new Song('Two', 2),
  new Song('Three', 3)
]);
var player = new Player(playerList);
