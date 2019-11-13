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


  app.delete("/api/queue/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Queue.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbQueue) {
      res.json(dbQueue);
    });
  });

  app.put("/api/queue", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Queue.update({
      name: req.body.name,
        queue_state: req.body.queue_state
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbQueue) {
      res.json(dbQueue);
    });
  });


  // Add to the Queue
  app.post("/api/queue", function(req, res) {
    db.Queue.create(req.body);
  });

};
