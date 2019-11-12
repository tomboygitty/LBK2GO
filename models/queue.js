// Create Queue model
module.exports = function(sequelize, DataTypes) {
  var Queue = sequelize.define(
    "Queue",
    {
      // Name stores the name entered by the user when they make a request
      name: DataTypes.STRING,
      // Queue State will store "Queued", "Active" or "Completed"
      queue_state: {
        type: DataTypes.STRING,
        defaultValue: "Queued"
      }
    },
    {
      underscored: true
    }
  );

  // Associate Queue model with Song model; each Queue has a Song
  Queue.associate = function(models) {
    // Associate Queue position with a Queue of specific ID
    Queue.belongsTo(models.Song, {
      onDelete: "no action"
    });
  };
  return Queue;
};
