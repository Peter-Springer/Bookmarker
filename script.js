var bookmarkCount = 0;
var readBookmarkCount = 0;
var unreadBookmarkCount = 0;

function counters() {
  bookmarkCount = $('li').length;
  $('.count-js').replaceWith('<p class="count-js">' + "Bookmarks in Inventory :" + bookmarkCount + '</p>');
  readBookmarkCount = $('.read').length;
  $('.read-count-js').replaceWith('<p class="read-count-js">' + "Read Bookmarks :" + readBookmarkCount + '</p>')
  unreadBookmarkCount = bookmarkCount - readBookmarkCount;
  $('.unread-count-js').replaceWith('<p class="unread-count-js">' + "Unread Bookmarks :" + unreadBookmarkCount + '</p>')
}

$('.text-input-js, .url-input-js').on('keyup', function() {
  var url = $('.url-input-js').val();
  var title = $('.text-input-js').val();
  if (title !== "" && url !== "") {
    $('#submit-js').prop('disabled', false);
  } else {
    $('#submit-js').prop('disabled', true);
  }
});

$('#submit-js').on('click', function(event) {
  event.preventDefault();
  var url = $('.url-input-js').val();
  var title = $('.text-input-js').val();
  var paragraph = document.createElement('p')
  $('.error-message-area-js').append(paragraph);
  if (url === "" || title === "") {
    return $(paragraph).prepend('Error: Please fill in both the Title and URL. 👻');
  } else {
    $('.error-message-area-js').remove();
  }
  var list = document.createElement('li');
  $(list).append("<h4>" + title + "</h4>");
  $(list).append('</br>' + "<a href='" + url + "' target='_blank'>" + url + "</a>");
  $(list).append('</br>' + '<button class="read-button-js">READ</button>');
  $(list).append('<button class="remove-button-js">REMOVE</button>');
  $('.bookmark-output-js').append(list);
  counters();
});

$('.bookmark-output-js').on('click', '.read-button-js', function() {
  $(this).parent().toggleClass('read');
  counters();
});

$('.bookmark-output-js').on('click', '.remove-button-js', function() {
  $(this).parent().remove();
  counters();
});

$('.clear-read-js').on('click', function() {
  $('.read').remove();
  counters();
});
