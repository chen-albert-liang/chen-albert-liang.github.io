var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxo4sKThB130VtqUfXXodH_Yu33NnAIgaj8pwmpjncfTfZEF66yFSwq6EfBWExdYlnF/exec'

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