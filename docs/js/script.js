$(function(){function n(){function n(){$.getJSON("js/"+t+".json",function(n){e=n})}var o=$("select#region"),t="usa";n(),o.on("change",function(){$("select option:selected").each(function(){t=$(this).val()}),n()})}function o(){for(var n=$(".fiveLetterInput").val().toUpperCase(),o=0;o<e.length;o++){var t=e[o].Address,a=e[o].City,i=e[o].State;if(n==e[o].code)var c=t+", "+a+", "+i}var r=$("#dest");r.val(c)}function t(){function n(n){var o=n.coords.latitude,t=n.coords.longitude;console.log(o,t),$("#userLocation").val(o+","+t)}"geolocation"in navigator?navigator.geolocation.getCurrentPosition(n):$(".err").append("<span>Must enable location. Refresh page to try again.</span>")}var e,a=$("#searchStore");n(),a.on("click",function(){o()}),t()});