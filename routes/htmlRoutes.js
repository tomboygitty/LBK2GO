var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load Song Title Search
  app.get("/title", function(req, res) {
    res.render("title");
  });

  // Load Title search results
  app.get("/title/:search", function(req, res) {
    db.Song.findAll({
      where: { song: req.params.search }
    }).then(function(dbSong) {
      res.render("song", {
        Songs: dbSong
      });
    });
  });

  // Load Artist Search
  app.get("/artist", function(req, res) {
    res.render("artist");
  });

  // Load Artist search results
  app.get("/artist/:search", function(req, res) {
    db.Song.findAll({
      where: { artist: req.params.search }
    }).then(function(dbSong) {
      res.render("song", {
        Songs: dbSong
      });
    });
  });

  // Load Genre Search
  app.get("/genre", function(req, res) {
    res.render("genre");
  });

  // Load Musical Key Search
  app.get("/key", function(req, res) {
    res.render("key");
  });

  // // Load Song page and pass in an Song by id
  // app.get("/Song/:id", function(req, res) {
  //   db.Song.findOne({ where: { id: req.params.id } }).then(function(dbSong) {
  //     res.render("song", {
  //       Song: dbSong
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
