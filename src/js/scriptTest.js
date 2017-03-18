/* Get user input
*  Get JSON Data
*  Search Data for store address
*  Display address and insert into google map form
*/
// --get current location
// get region
// --get store code
// --submit find matching store
// --add address to google form 
var theData; 
var storeSearch = $('#searchStore');
function getLocation() {
  function success(pos) {
    var lat = pos.coords.latitude,
        long = pos.coords.longitude;
    document.getElementById("userLocation").value = lat + ',' + long;
  };

  if( 'geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(success);
  } else {
    $('.err').append('<span>You are using an outdated browswer try: <a href="https://www.google.com/chrome/browser/desktop/index.html">Chrome</a></span>');
  };
};

function getData() {
  var xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'js/usa.json')
  xhr.onload = function() {
    var data = xhr.responseText;
    //console.log(data);
  }

  xhr.send();
};

function findAddress() {
  var fiveLetter = document.getElementById('fiveLetterInput').value.toUpperCase();
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









getData();
getLocation();

storeSearch.on('click', function() {
  findAddress();
  }); 