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
//jsonCall(); //makes json call as soon as getdata() is called

function findAddress() {
  var fiveLetter = $('.fiveLetterInput').val().toUpperCase();
  for (var i = 0; i < theData.length; i++) {
  var addr = theData[i].Address,
      city = theData[i].City,
      state = theData[i].State,
      phone = theData[i].Phone,
      fax = theData[i].Fax,
      email = theData[i].Email;

      if (fiveLetter == theData[i].code) { //if the five letter = a code in json file display info
        $('#dest').val(addr + ', ' + city + ', ' + state); 
        $('#addr').text(addr + ', ' + city + ', ' + state);
        $('#phone').text(phone);
        $('#fax').text(fax);
        $('#email').text(email);
        var h = 'jello';
        $('.waze').replaceWith(
          "<a href='waze://?q="+addr+","+city+","+state+"' class='submitButton'> Waze</a>"
          );
        return; //to jump out of for loop/ if statement
      }
/*FIX this
      } else if (fiveLetter !== theData[i].code) {
        console.log('err');
        return;
      }
      */
  };//end for loop
  
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
    findAddress();
  }); 

});