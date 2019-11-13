var db = require("../models");
var Op = require("sequelize").Op;

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
    var query = "%" + req.params.search + "%";
    db.Song.findAll({
      where: { song: { [Op.like]: query } }
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
    var query = "%" + req.params.search + "%";
    db.Song.findAll({
      where: { artist: { [Op.like]: query } }
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

  // Load Genre search results
  app.get("/genre/:search", function(req, res) {
    var query = "%" + req.params.search + "%";
    db.Song.findAll({
      where: { genre: { [Op.like]: query } }
    }).then(function(dbSong) {
      res.render("song", {
        Songs: dbSong
      });
    });
  });

  // Load Musical Key Search
  app.get("/key", function(req, res) {
    res.render("key");
  });

     // Load Key search results
     app.get("/key/:search", function(req, res) {
      db.Song.findAll({
        where: { music_key: req.params.search }
      }).then(function(dbSong) {
        res.render("song", {
          Songs: dbSong
        });
      });
    });

  // Load all non-completed Queues in Table
  app.get("/queue", function(req, res) {
    db.Queue.findAll({
      where: { [Op.or]: [ {queue_state: "Active" }, {queue_state: "Queued"} ] },
      include: [db.Song]
    }).then(function(dbQueue) {
      res.render("queue", {
        Queues: dbQueue
      });
    });
  });

  // // Add a queue position
  // app.post("queue", function(req, res) {
  //   console.log(req.body);
  //   db.Queue.create({
  //     name: req.body.name,
  //     song_id: req.body.song_id
  //   }).then(function(dbQueue) {
  //     res.render("queue", {
  //       Queues: dbQueue 
  //     });
  //   });
  // });

  app.get("/mc", function(req, res) {
    db.Queue.findAll({
      where: { [Op.or]: [ {queue_state: "Active" }, {queue_state: "Queued"} ] }
    //  include: [db.Song]
    }).then(function(dbQueue) {
      res.render("mc", {
        Queues: dbQueue
      });
    });
  });
  

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
