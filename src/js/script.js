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
    });   //end json call
  }
  jsonCall();

  regionInput.on('change',function() {
   $('select option:selected').each(function() {
    region = $(this).val();
    });

    jsonCall();
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

};
getData();
storeSearch.on('click', function() {
findAddress();
  }); 
});