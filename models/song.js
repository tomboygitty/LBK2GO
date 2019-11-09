// Create Song model
module.exports = function(sequelize, DataTypes) {
  var Song = sequelize.define(
    "Song",
    {
      song: DataTypes.STRING,
      artist: DataTypes.STRING,
      genre: DataTypes.STRING,
      music_key: DataTypes.STRING
    },
    {
      timestamps: false,
      underscored: true
    }
  );
  // Associate Song model with Queue model; each Song can have many different Queue positions
  Song.associate = function(models) {
    // Associate Queue position with a Song of specific ID
    Song.hasMany(models.Queue, {
      foreignKey: "song_id",
      onDelete: "no action"
    });
  };
  return Song;
};
