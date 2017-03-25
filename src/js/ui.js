$(function() {
  var fiveLetterBtn = $('.fiveLtrBtn'),
      stateBtn = $('.stateBtn'),
      cityBtn = $('.cityState'),
      fiveLetterForm = $('.five-letter'),
      stateForm = $('.state'),
      cityForm = $('.city-state');
$(window).on('load', function() {
  stateForm.hide();
  cityForm.hide();
})
  
  fiveLetterBtn.on('click', function() {
    fiveLetterForm.slideDown();
    stateForm.slideUp();
    cityForm.slideUp();
  });

  stateBtn.on('click', function() {
    fiveLetterForm.slideUp();
    stateForm.slideDown();
    cityForm.slideUp();
  });

  cityBtn.on('click', function() {
     fiveLetterForm.slideUp();
    stateForm.slideUp();
    cityForm.slideDown();
  });

});