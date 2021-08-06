var $form = $('form#waitlist-form'),
    url = 'https://script.google.com/macros/s/AKfycbx6yzPZPYSZGhs_eoE1wh40tvQO3zV0diwSTbQwjIU98xESchbNub_Juu_6fXHLjDc/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})