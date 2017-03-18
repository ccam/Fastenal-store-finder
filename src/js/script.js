/* Get user input
*  Get JSON Data
*  Search Data for store address
*  Display address and insert into google map form
*/
$(function() {
var storeSearch = $('#searchStore');
var theData; // is assigned the JSON data

function jsonCall() {
  $.getJSON('js/all.json', function(data){
    theData = data;
  });   //end .getJSON()
}//end jsonCall()

function findAddress() {
  var fiveLetter = $('.fiveLetterInput').val().toUpperCase();

 $.each(theData, function(i,v) {
   
    var addr = v.Address,
        city = v.City,
        state = v.State,
        phone = v.Phone,
        fax = v.Fax,
        email = v.Email;

    if (v.code == fiveLetter) {//if the five letter = a code in json file display info
      $('#dest').val(addr + ', ' + city + ', ' + state); 
      $('#addr').text(addr + ', ' + city + ', ' + state);
      $('#phone').text(phone);
      $('#fax').text(fax);
      $('#email').text(email);
      var h = 'jello';
      $('.waze').replaceWith(
          "<a href='waze://?q="+addr+","+city+","+state+"' class='submitButton'> Waze</a>"
        );
    } //end if  
  });//end of $.each();
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
  

 jsonCall();
 getLocation();
 storeSearch.on('click', function() {
   findAddress()
  }); 
});