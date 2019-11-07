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

  Song.associate = function(models) {
    // Associating Queue position with a Song of specific ID
    Song.hasMany(models.Queue, {
      foreignKey: "song_id",
      onDelete: "no action"
    });
  };
  return Song;
};
