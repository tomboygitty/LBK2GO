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
      timestamps: false,
      underscored: true
    }
  );
  return Queue;
};
