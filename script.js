
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
  $(list).append(title);
  $(list).append('</br>' + "<a href='" + url + "' target='_blank'>" + url + "</a>");
  $(list).append('</br>' + '<button class="read-button-js">READ</button>');
  $(list).append('<button class="remove-button-js">REMOVE</button>');
  $('.bookmark-output-js').append(list);
});

$('.bookmark-output-js').on('click', '.read-button-js', function() {
  $(this).parent().toggleClass('read');
});

$('.bookmark-output-js').on('click', '.remove-button-js', function() {
  $(this).parent().remove();
});
