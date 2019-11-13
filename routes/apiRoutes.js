var db = require("../models");

module.exports = function(app) {
  // Search songs
  app.get("/api/songs", function(req, res) {
    db.Song.findAll({}).then(function(dbSong) {
      res.json(dbSong);
    });
  });

  // Create a new song
  app.post("/api/songs", function(req, res) {
    db.Song.create(req.body).then(function(dbSong) {
      res.json(dbSong);
    });
  });

  // Delete a Song by id
  app.delete("/api/songs/:id", function(req, res) {
    db.Song.destroy({ where: { id: req.params.id } }).then(function(dbSong) {
      res.json(dbSong);
    });
  });

  // Queue
  app.get("/api/queue", function(req, res) {
    db.Queue.findAll({}).then(function(dbQueue) {
      res.json(dbQueue);
    });
  });

  // Add to the Queue
  app.post("/api/queue", function(req, res) {
    db.Queue.create(req.body);
  });
};
