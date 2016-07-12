$('#submit').on('click', function(event) {
  event.preventDefault();
  var title = $('.text-input').val();
  $('.bookmark-output').append('</br>' + title);
  var url = $('.url-input').val();
  $('.bookmark-output').append('</br>' + url);
  $('.bookmark-output').append('<button class="read-button">READ</button>');
  $('.bookmark-output').append('<button class="remove-button">REMOVE</button>');
});

// $('button').on('click', function() {
//   $('.read-button').addClass('.read');
// });
