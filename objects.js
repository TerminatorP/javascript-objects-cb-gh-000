var playlist = {
  "Elton John": "Your Song"
};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}
