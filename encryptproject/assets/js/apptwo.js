$('.word-wrapper').hover(function(event) {
  // mouse over
  $(this).children().toggleClass('show');
}, function() {
  // mouse out
});