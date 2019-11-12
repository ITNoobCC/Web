function Song(nameSong, lengthSong) {
  // название, длительность
  this.nameSong = [nameSong];
  this.lengthSong = [lengthSong];
}

function PlayerList() {
  // хранит список песен
  this.songs = [new Song("One", 1), new Song("Two", 2),new Song("Three", 3)];
}

function Player() {
  PlayerList.call(this);
  var i = 0;
  this.status = "play";
  this.currentTrack = this.songs[i].nameSong;

  this.display = function() {
    return "Track: " + this.currentTrack + " Status: " + this.status;
  };

  this.play = function() {
    this.status = "play";
  };

  this.stop = function() {
    this.status = "stop";
  };

  this.pause = function() {
    this.status = "pause";
  };

  this.next = function() {
    if (i != this.songs.length - 1) {
      i++;
      this.currentTrack = this.songs[i].nameSong;
    } else {
      i = 0;
      this.currentTrack = this.songs[i].nameSong;
    }
  };

  this.prev = function() {
    if (i != 0) {
      i--;
      this.currentTrack = this.songs[i].nameSong;
    } else {
      i = this.songs.length -1;
      this.currentTrack = this.songs[i].nameSong;
    }
  };
}
var playerList = new Player();
