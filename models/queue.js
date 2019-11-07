module.exports = function(sequelize, DataTypes) {
  var Queue = sequelize.define("Queue", {
    name: DataTypes.STRING,
    queue_state: {
      type: DataTypes.STRING,
      defaultValue: "Queued"
    }
  });

  Queue.associate = function(models) {
    // Associating Queue position with a Song of specific ID
    Queue.hasOne(models.Song, { foreignKey: "id" });
  };
  return Queue;
};
