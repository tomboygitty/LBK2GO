var db = require("../models");

module.exports = function(app) {
  // Search songs
  app.get("/api/songs", function(req, res) {
    db.Song.findAll({}).then(function(dbSongs) {
      res.json(dbSongs);
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
};
