// Get references to page elements
var $searchText = $("#search");
var $submitBtn = $("#submit");
var $selectBtn = $(".select");
var $nameInput = $("#name-input");
var $nameSubmit = $("#name-submit");

// Create temp variables
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
      url: "api/queues" + id,
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

    // case "genre-text":
    //   songsAPI.searchGenres(text);
  }
};

var handleSelection = function(event) {
  event.preventDefault();

  song_id = $selectBtn.attr("id");

  var nameInput =
    "<form class='clearfix mb-4'><div class='form-group'><input type='text' id='name-input' class='form-control' placeholder='Enter Your Name'></div><button id='name-submit' class='btn btn-primary float-left'>Submit Your Song to the Queue!</button></form>";
  $("#name-prompt").append($(nameInput));
};

var handleQueue = function(event) {
  event.preventDefault();

  name = $nameInput.val().trim();
  console.log(name);
  console.log(song_id);

  //queuesAPI.addQueue(name, song_id);
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleSearch);
$selectBtn.on("click", handleSelection);
$nameSubmit.on("click", handleQueue);
