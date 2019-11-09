var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Song.findAll({}).then(function(dbSongs) {
      res.render("index", {
        msg: "Welcome!",
        Songs: dbSongs
      });
    });
  });

  // Load Song page and pass in an Song by id
  app.get("/Song/:id", function(req, res) {
    db.Song.findOne({ where: { id: req.params.id } }).then(function(dbSong) {
      res.render("song", {
        Song: dbSong
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
