module.exports = function(sequelize, DataTypes) {
  var Queue = sequelize.define(
    "Queue",
    {
      name: DataTypes.STRING,
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
