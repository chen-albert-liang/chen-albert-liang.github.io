var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbyGauk8gM2ye5Z0zf7MqNwcafe7K2KlSomThrHl4O5ZryhCZNkpJW0fLLxIgoL1hok/exec'

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
