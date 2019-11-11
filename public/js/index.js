// Get references to page elements
var $searchText = $("#search");
var $submitBtn = $("#submit");

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
    //   break;

    // case "title-text":
    //   songsAPI.searchSongs(text);
  }
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleSearch);

$.get("/api/songs", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("queueList");

      row.append("<p>" + "<b>Song: </b>" + data[i].song + " | <b>Artist: </b>" + data[i].artist + "<button class='queueDelete btn btn-secondary'>Delete</button><hr>");

      $("#queue-area").prepend(row);

    }

  }

});
