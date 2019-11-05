function Song() {
  // название, длительность
  this.nameSong = ['one.mp3'];
  this.lengthSong = [2.4];
  this.addSong = function(nameSong, lengthSong) {
    this.nameSong.push(nameSong);
    this.lengthSong.push(lengthSong);
  };
}

function PlayerList(Song) {
  // хранит список песен
  this.songs = [nameSong, lengthSong];
}

function Player(PlayerList) {
  var i = 0;
  this.currentTrack = songs[0][0];
  this.lengthTrack = songs[1][0];
  this.status = 'play';

  // this.playerList = playerList;

  this.display = function() {
    return (
      'Track: ' +
      this.currentTrack +
      ' Status: ' +
      this.status +
      ' Length Track: ' +
      this.lengthTrack
    );
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
    if (i != nameSong.length - 1) {
      i++;
      this.currentTrack = songs[0][i];
      this.lengthTrack = songs[1][i];
    } else {
      i = 0;
      this.currentTrack = songs[0][i];
      this.lengthTrack = songs[1][i];
    }
  };

  this.prev = function() {
    if (i != 0) {
      i--;
      this.currentTrack = songs[0][i];
      this.lengthTrack = songs[1][i];
    } else {
      i = nameSong.length - 1;
      this.currentTrack = songs[0][i];
      this.lengthTrack = songs[1][i];
    }
  };
}
Player(PlayerList(Song()));
