
$('#submit-js').on('click', function(event) {
  event.preventDefault();
  // debugger;
  var url = $('.url-input-js').val();
  var title = $('.text-input-js').val();
  $(list).append('</br>' + title);
  $(list).append('</br>' + "<a href='" + url + "'>" + url + "</a>");
  $(list).append('</br>' + '<button class="read-button-js">READ</button>');
  $(list).append('<button class="remove-button-js">REMOVE</button>');
  $('.bookmark-output-js').append(list)
  var list = document.createElement('li');
  if (url === "" || title === "") {
    alert("🙈")
    }
});


$('.bookmark-output-js').on('click', '.read-button-js', function() {
  $(this).toggleClass('read');
});

$('.bookmark-output-js').on('click', '.remove-button-js', function() {
  $(this).parent().remove();
});
