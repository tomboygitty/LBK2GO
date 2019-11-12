// Get references to page elements
var $searchText = $("#search");
var $submitBtn = $("#submit");
var $selectBtn = $(".select");
var $nameInput = $("#name-input");
var $nameSubmit = $("#name-submit");
var $keySearch = $(".key-search");

// Create temp variables to store info for Queue entry
var name = "";
var song_id = null;

// The API object contains methods for each kind of request we'll make
var songsAPI = {
  searchTitles: function(text) {
    return $.ajax({
      url: "title/" + text,
      type: "GET"
    });
  },
  searchArtists: function(text) {
    return $.ajax({
      url: "artist/" + text,
      type: "GET"
    });
  },
  searchGenres: function(text) {
    return $.ajax({
      url: "genre/" + text,
      type: "GET"
    });
  },
  searchKeys: function(text) {
    return $.ajax({
      url: "key/" + text,
      type: "GET"
    });
  }
};

var queuesAPI = {
  addQueue: function() {
    var queue = {
      name: name,
      song_id: song_id
    };
    return $.ajax({
      url: "api/queues/" + id,
      type: "POST",
      json: queue
    });
  }
};

// handleSearch is called whenever we submit a search
var handleSearch = function(event) {
  event.preventDefault();

  var text = $searchText.val().trim();
  var type = $searchText.attr("aria-describedby");

  if (!text) {
    alert("You must enter a search string!");
    return;
  }

  switch (type) {
      
  case "title-text":
    songsAPI.searchTitles(text);
    break;

  case "artist-text":
    songsAPI.searchArtists(text);
    break;

  case "genre-text":
    songsAPI.searchGenres(text);
  }
};

var handleSelection = function(event) {
  event.preventDefault();

  $(".name-prompt-class").empty();

  song_id = $(this).attr("id");

  var nameSelect = "#name-prompt-" + song_id;
  $(nameSelect).empty();

  var nameInput =
    "<form class='clearfix mb-4'><div class='form-group'><input type='text' id='name-input' class='form-control' placeholder='Enter Your Name'></div><button id='name-submit' class='btn btn-primary float-left'>Submit Your Song to the Queue!</button></form>";
  $(nameSelect).append($(nameInput));
};

var handleKeySearch = function() {
  event.preventDefault();

  var key = $(this).attr("id");
  songsAPI.searchKeys(key);
};

var handleQueue = function(event) {
  event.preventDefault();

  name = $nameInput.val().trim();
  console.log(name);
  console.log(song_id);

  //queuesAPI.addQueue(name, song_id);
};

//Generates the songs to the Queue
$.get("/api/songs", function(data) {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<div>");
      row.addClass("queueList");

      row.append(
        "<p>" +
          "<b>Song: </b>" +
          data[i].song +
          " | <b>Artist: </b>" +
          data[i].artist +
          "<button class='queueDelete btn btn-secondary' id={{this.id}}>Delete</button><hr>"
      );

      $("#queue-area").prepend(row);
    }
  }
});

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleSearch);
$selectBtn.on("click", handleSelection);
$nameSubmit.on("click", handleQueue);
$keySearch.on("click", handleKeySearch);
