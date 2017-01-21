/* Get user input
*  Get JSON Data
*  Search Data for store address
*  Display address and insert into google map form
*/
$(function() {
var storeSearch = $('#searchStore');
var theData; // is assigned the JSON data
var fiveLetter = $('.fiveLetterInput').val().toUpperCase();

function getData() {
  $('#region').change(function(){
    var region = '';

    $('select option:selected').each(function() {
      region += $(this).val();
    });

    $.getJSON('js/'+region+'.json', function(data){
      theData = data;
    }); //end json call
  });
};

function findAddress() {
  for (var i = 0; i < theData.length; i++) {
  var addr = theData[i].Address,
      city = theData[i].City,
      state = theData[i].State;
      
      if (fiveLetter == theData[i].code) {
        var final = addr + ', ' + city + ', ' + state;
        console.log(final);
      };
  };

  var dest = $('#dest');
  dest.val(final);

};

storeSearch.on('click', function() {
  
  getData();  
  findAddress();
  }); 
});