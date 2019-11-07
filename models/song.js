module.exports = function(sequelize, DataTypes) {
  var Song = sequelize.define("Song", {
    song: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    music_key: DataTypes.STRING
  });
  return Song;
};
