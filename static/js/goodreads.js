var open = function () {
  
  var handleReading = function () {
    var goodreadsUser = document.getElementById('goodreads-user').value
    try {
      $.get('https://books.medoix.com/reading/' + goodreadsUser + '/currently-reading/json', function (json) {
        var count = 0;
        var books = "";
        for (var i = 0; i < json.length; i++) {
          books += `<span class="dottedBorder"><a href="${json[i].book[0].link}" target="_blank" rel="external nofollow noopener noreferrer"><img src="${json[i].book[0].image_url}" /></a></span>`
          count++;
        }
        $("#reading-shelf-count").html(count);
        $(".reading-blankslate").html(books);
      });
    }
    catch(err) {
      var error = "Error: Could not retrieve books";
      $(".reading-blankslate").html(err);
    }
  };

  var handleRead = function () {
    var goodreadsUser = document.getElementById('goodreads-user').value
    try {
      $.get('https://books.medoix.com/reading/' + goodreadsUser + '/read/json', function (json) {
        var count = 0;
        var books = "";
        for (var i = 0; i < json.length; i++) {
          books += `<span class="dottedBorder"><a href="${json[i].book[0].link}" target="_blank" rel="external nofollow noopener noreferrer"><img src="${json[i].book[0].image_url}" /></a></span>`
          count++;
        }
        $("#read-shelf-count").html(count);
        $(".read-blankslate").html(books);
      });
    }
    catch(err) {
      var error = "Error: Could not retrieve books";
      $(".read-blankslate").html(err);
    }
  };

  var handleToRead = function () {
    var goodreadsUser = document.getElementById('goodreads-user').value
    try {
      $.get('https://books.medoix.com/reading/' + goodreadsUser + '/to-read/json', function (json) {
        var count = 0;
        var books = "";
        for (var i = 0; i < json.length; i++) {
          books += `<span class="dottedBorder"><a href="${json[i].book[0].link}" target="_blank" rel="external nofollow noopener noreferrer"><img src="${json[i].book[0].image_url}" /></a></span>`
          count++;
        }
        $("#toread-shelf-count").html(count);
        $(".toread-blankslate").html(books);
      });
    }
    catch(err) {
      var error = "Error: Could not retrieve books";
      $(".toread-blankslate").html(err);
    }
  };

  return {
    init: function () {
      handleReading();
      handleRead();
      handleToRead();
    }
  }
};
$(open().init);
