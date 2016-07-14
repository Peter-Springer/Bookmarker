var bookmarkCount = 0;
var readBookmarkCount = 0;
var unreadBookmarkCount = 0;

function validUrl(valid) {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  return regexp.test(valid);
}

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
  if (title !== '' && url !== '') {
    $('#submit-js').prop('disabled', false);
  } else {
    $('#submit-js').prop('disabled', true);
  }
});

$('#submit-js').on('click', function(event) {
  event.preventDefault();
  var url = $('.url-input-js').val();
  var title = $('.text-input-js').val();
  var article = document.createElement('article')
  if (!validUrl(url)) {
    $('.error-message-area-js').append(article);
    return $(article).append( '<p class="error-message-js">' + 'Error: Please enter a valid URL. 👻' + '</p>');
  } else {
    $('.error-message-js').parent().remove();
  }
  var list = document.createElement('li');
  $(list).append("<h4>" + title + "</h4>");
  $(list).append('</br>' + "<a href='" + url + "' target='_blank'>" + url + "</a>");
  $(list).append('</br>' + '<button class="read-button-js">READ</button>');
  $(list).append('<button class="remove-button-js">REMOVE</button>');
  $('.bookmark-output-js').append(list);
  $('.text-input-js').val('');
  $('.url-input-js').val('');
  $('#submit-js').prop('disabled', true);
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
