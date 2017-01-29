/* Get user input
*  Get JSON Data
*  Search Data for store address
*  Display address and insert into google map form
*/
$(function() {
var storeSearch = $('#searchStore');
var theData; // is assigned the JSON data

function getData() {
  var regionInput = $('select#region');
  var region = 'usa';
  
  function jsonCall() {
    $.getJSON('js/' +region+ '.json', function(data){
      theData = data;
    });   //end .getJSON()
  }//end jsonCall()
  jsonCall(); //makes json call as soon as getdata() is called

  regionInput.on('change',function() {
   $('select option:selected').each(function() {
    region = $(this).val();
    });
    jsonCall(); // makes json call once user changes region
  });
};//end getData()

function findAddress() {
  var fiveLetter = $('.fiveLetterInput').val().toUpperCase();
  for (var i = 0; i < theData.length; i++) {
  var addr = theData[i].Address,
      city = theData[i].City,
      state = theData[i].State;
    if (fiveLetter == theData[i].code) {
      var final = addr + ', ' + city + ', ' + state;
    };
  };

  
  var dest = $('#dest');
  dest.val(final);
};//end findAddress

  function getLocation() {
    function success(pos) {
      var lat = pos.coords.latitude,
          long = pos.coords.longitude;
      $('#userLocation').val(lat + ',' + long);
    };

    if( 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(success);
    } else {
      $('.err').append('<span>You are using an outdated browswer try: <a href="https://www.google.com/chrome/browser/desktop/index.html">Chrome</a></span>');
    };
  };

  getData();
  getLocation();
  storeSearch.on('click', function() {
    findAddress();
  }); 

});